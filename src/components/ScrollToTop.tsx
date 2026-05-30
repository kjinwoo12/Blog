import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { instantScrollToTop } from '../lib/instantScrollToTop';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useLayoutEffect(() => {
    const previous = previousPath.current;
    previousPath.current = pathname;

    if (pathname.startsWith('/project/')) return;
    if (previous.startsWith('/project/') && pathname === '/') return;

    instantScrollToTop();
  }, [pathname]);

  return null;
}
