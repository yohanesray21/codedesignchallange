import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let IconLightButton = document.getElementById('theme-toggle-light-icon');

    let IconDarkButton = document.getElementById('theme-toggle-dark-icon');

    if (!document.documentElement.classList.contains('dark')) {
      IconLightButton?.classList.remove('hidden');
      localStorage.setItem('theme', 'light');
    } else {
      IconDarkButton?.classList.remove('hidden');

      localStorage.setItem('theme', 'dark');
    }

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
