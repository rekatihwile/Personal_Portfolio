import * as pdfjs from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

/* Parses the resume PDF into structural blocks so the page can render it in
   the site's own theme. Nothing is hardcoded to the resume's content — the
   classification works off layout (indentation, bullets, line shape), so the
   page tracks whatever public/Resume.pdf currently says. */

export type ResumeBlock =
  | { kind: 'section'; text: string }
  | { kind: 'subheading'; text: string }
  | { kind: 'paragraph'; lines: string[] }
  | { kind: 'bullet'; lines: string[] };

export type ParsedResume = {
  name: string;
  contact: string[];
  blocks: ResumeBlock[];
};

type Line = { x: number; textX: number; text: string };

const BULLET = /^[●•▪‣◦]\s*/;
/* A line "ends" a thought if it closes with punctuation or a year — used to
   decide whether the next PDF line is a soft wrap or a real new line. */
const TERMINAL = /([.:;!?)]|\d{4})$/;

function buildLines(items: { str: string; transform: number[]; width: number }[]): Line[] {
  // Group text runs into visual rows by their y coordinate.
  const rows = new Map<number, { x: number; width: number; str: string }[]>();
  for (const item of items) {
    if (!item.str.trim()) continue;
    const y = item.transform[5];
    const key = [...rows.keys()].find((k) => Math.abs(k - y) <= 2) ?? y;
    if (!rows.has(key)) rows.set(key, []);
    rows.get(key)!.push({ x: item.transform[4], width: item.width, str: item.str });
  }

  const lines: Line[] = [];
  for (const [, frags] of [...rows.entries()].sort((a, b) => b[0] - a[0])) {
    frags.sort((a, b) => a.x - b.x);
    let text = '';
    let cursor: number | null = null;
    for (const f of frags) {
      // Insert a space only when there is a real horizontal gap between runs.
      if (cursor !== null && f.x - cursor > 1 && !text.endsWith(' ') && !f.str.startsWith(' ')) {
        text += ' ';
      }
      text += f.str;
      cursor = f.x + f.width;
    }
    text = text.replace(/\s+/g, ' ').trim();
    if (!text) continue;

    // Where the line's content starts, past any bullet glyph.
    let textX = frags[0].x;
    if (BULLET.test(text)) {
      const afterBullet = frags.find((f, i) => i > 0 && f.str.trim() && !BULLET.test(f.str.trim()));
      textX = afterBullet ? afterBullet.x : frags[0].x + 18;
    }
    lines.push({ x: frags[0].x, textX, text });
  }
  return lines;
}

function appendLine(lines: string[], text: string) {
  const prev = lines[lines.length - 1];
  // Soft-wrapped continuation → merge; otherwise keep as its own line.
  if (prev && (!TERMINAL.test(prev) || /^[a-z]/.test(text))) {
    lines[lines.length - 1] = `${prev} ${text}`;
  } else {
    lines.push(text);
  }
}

export async function parseResumePdf(url: string): Promise<ParsedResume> {
  const doc = await pdfjs.getDocument({ url }).promise;
  const lines: Line[] = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    const items = content.items.filter(
      (i): i is (typeof content.items)[number] & { str: string; transform: number[]; width: number } =>
        'str' in i
    );
    lines.push(...buildLines(items));
  }

  const [nameLine, contactLine, ...rest] = lines;
  if (!nameLine) throw new Error('Empty resume PDF');

  const minX = Math.min(...rest.map((l) => l.x));
  const isSection = (l: Line) =>
    l.x <= minX + 6 &&
    l.text.length <= 48 &&
    /^[A-Z]/.test(l.text) &&
    !/[.,;:]$/.test(l.text) &&
    l.text.split(' ').length <= 6;

  const blocks: ResumeBlock[] = [];
  let lastBulletTextX = 0;

  for (const l of rest) {
    if (isSection(l)) {
      blocks.push({ kind: 'section', text: l.text });
      continue;
    }
    if (BULLET.test(l.text)) {
      blocks.push({ kind: 'bullet', lines: [l.text.replace(BULLET, '')] });
      lastBulletTextX = l.textX;
      continue;
    }
    const last = blocks[blocks.length - 1];
    if (last?.kind === 'bullet' && Math.abs(l.x - lastBulletTextX) < 14) {
      appendLine(last.lines, l.text);
      continue;
    }
    if (last?.kind === 'paragraph') {
      appendLine(last.lines, l.text);
      continue;
    }
    if (l.text.length <= 50 && /^[A-Z]/.test(l.text) && !/\.$/.test(l.text) && last) {
      blocks.push({ kind: 'subheading', text: l.text });
      continue;
    }
    blocks.push({ kind: 'paragraph', lines: [l.text] });
  }

  return {
    name: nameLine.text,
    contact: contactLine ? contactLine.text.split('|').map((s) => s.trim()) : [],
    blocks,
  };
}
