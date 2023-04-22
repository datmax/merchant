import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Urbanist } from 'next/font/google';
const inter = Urbanist({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
