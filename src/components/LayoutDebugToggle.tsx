import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-layout-debug';

export default function LayoutDebugToggle() {
  const [enabled, setEnabled] = useState(() => localStorage.getItem(STORAGE_KEY) === 'true');

  useEffect(() => {
    document.documentElement.classList.toggle('layout-debug', enabled);
    localStorage.setItem(STORAGE_KEY, String(enabled));

    return () => document.documentElement.classList.remove('layout-debug');
  }, [enabled]);

  return (
    <>
      {enabled && (
        <div className="layout-debug-legend" aria-hidden="true">
          <span data-color="page">Page padding</span>
          <span data-color="section">Sections / rows</span>
          <span data-color="column">Grid columns</span>
          <span data-color="text">Text</span>
          <span data-color="media">Media</span>
        </div>
      )}
      <button
        type="button"
        className="layout-debug-toggle"
        aria-pressed={enabled}
        onClick={() => setEnabled((current) => !current)}
      >
        {enabled ? 'Hide layout' : 'Show layout'}
      </button>
    </>
  );
}
