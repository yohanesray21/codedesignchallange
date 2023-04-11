import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
