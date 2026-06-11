import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { parseResumePdf } from '../lib/parseResumePdf';
import type { ParsedResume, ResumeBlock } from '../lib/parseResumePdf';

const RESUME_URL = '/Resume.pdf';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\(?\d{3}\)?[ -]?\d{3}-\d{4}$/;

function ContactItem({ text }: { text: string }) {
  const linkCls =
    'underline decoration-dotted underline-offset-4 transition-colors duration-200 hover:text-white';
  if (EMAIL.test(text)) {
    return (
      <a href={`mailto:${text}`} className={linkCls}>
        {text}
      </a>
    );
  }
  if (PHONE.test(text)) {
    return (
      <a href={`tel:${text.replace(/[^\d]/g, '')}`} className={linkCls}>
        {text}
      </a>
    );
  }
  return <span>{text}</span>;
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold">
      <span className="h-px w-6 bg-indigo-400/60" aria-hidden />
      {children}
    </h2>
  );
}

/* Pull a title out of a bullet's first line so entries read like the rest of
   the site: white title, dimmed parenthetical (dates, GPA), gray body. */
function emphasizeLine(line: string, index: number, total: number): ReactNode {
  const colon = line.indexOf(':');
  if (colon > 0 && colon <= 40) {
    return (
      <>
        <span className="font-medium text-white">{line.slice(0, colon + 1)}</span>
        {line.slice(colon + 1)}
      </>
    );
  }
  if (index === 0 && total > 1) {
    const paren = line.indexOf(' (');
    if (paren > 0 && paren <= 70) {
      return (
        <>
          <span className="font-medium text-white">{line.slice(0, paren)}</span>
          <span className="text-gray-500"> {line.slice(paren + 1)}</span>
        </>
      );
    }
    if (line.length <= 70) return <span className="font-medium text-white">{line}</span>;
  }
  return line;
}

function Block({ block }: { block: ResumeBlock }) {
  switch (block.kind) {
    case 'subheading':
      return <h3 className="pt-1 font-medium text-white">{block.text}</h3>;
    case 'paragraph':
      return <p className="leading-relaxed text-gray-300">{block.lines.join(' ')}</p>;
    case 'bullet':
      return (
        <div className="accent-item text-gray-300">
          {block.lines.map((line, i) => (
            <p key={i} className="leading-relaxed">
              {emphasizeLine(line, i, block.lines.length)}
            </p>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function Resume() {
  usePageTitle('Resume');
  const [resume, setResume] = useState<ParsedResume | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    parseResumePdf(RESUME_URL)
      .then((parsed) => {
        if (!cancelled) setResume(parsed);
      })
      .catch((err) => {
        console.error('Resume parse failed:', err);
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Group blocks under their section headings for rendering.
  const sections: { heading: string; children: ResumeBlock[] }[] = [];
  for (const block of resume?.blocks ?? []) {
    if (block.kind === 'section') {
      sections.push({ heading: block.text, children: [] });
    } else if (sections.length > 0) {
      sections[sections.length - 1].children.push(block);
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-8">
      {failed && (
        <div className="flex h-[24rem] flex-col items-center justify-center gap-3 text-sm text-gray-400">
          <p>The resume couldn't be displayed here.</p>
          <a
            href={RESUME_URL}
            className="text-indigo-300 underline decoration-dotted underline-offset-4 transition-colors duration-200 hover:text-indigo-200"
          >
            Open the PDF directly
          </a>
        </div>
      )}

      {!failed && !resume && (
        <div className="h-[36rem] animate-pulse rounded-xl border border-white/10 bg-[#0f1213]" />
      )}

      {resume && (
        <>
          <header className="mb-12 animate-fade-up text-center motion-reduce:animate-none">
            <h1 className="text-4xl font-semibold tracking-tight">{resume.name}</h1>
            {resume.contact.length > 0 && (
              <p className="mt-3 text-gray-400">
                {resume.contact.map((item, i) => (
                  <span key={item}>
                    {i > 0 && <span className="mx-2 text-gray-600">|</span>}
                    <ContactItem text={item} />
                  </span>
                ))}
              </p>
            )}
            <a
              href={RESUME_URL}
              download
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-400"
            >
              Download PDF
              <span aria-hidden>↓</span>
            </a>
          </header>

          <div className="animate-fade-up space-y-12 [animation-delay:120ms] motion-reduce:animate-none">
            {sections.map((section) => (
              <section key={section.heading}>
                <SectionHeading>{section.heading}</SectionHeading>
                <div className="space-y-4">
                  {section.children.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Resume;
