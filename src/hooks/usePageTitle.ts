import { useEffect } from 'react';

const BASE_TITLE = 'Eli Whitaker';

/** Sets the document title for the current page; pass nothing for the home page. */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE_TITLE}` : `${BASE_TITLE} — Portfolio`;
  }, [title]);
}
