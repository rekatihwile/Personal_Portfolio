import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

function NotFound() {
  usePageTitle('Page Not Found');
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <p className="animate-fade-up text-sm font-medium tracking-[0.22em] text-indigo-400 uppercase motion-reduce:animate-none">
        404
      </p>
      <h1 className="mt-3 animate-fade-up text-3xl font-semibold tracking-tight [animation-delay:80ms] motion-reduce:animate-none md:text-4xl">
        This page doesn't exist.
      </h1>
      <p className="mt-4 max-w-md animate-fade-up text-gray-400 [animation-delay:160ms] motion-reduce:animate-none">
        The link may be outdated, or the page may have moved.
      </p>
      <Link
        to="/"
        className="mt-8 animate-fade-up rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 [animation-delay:240ms] hover:bg-indigo-400 motion-reduce:animate-none"
      >
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;
