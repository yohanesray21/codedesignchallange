import { Inter, Source_Sans_Pro } from 'next/font/google';
import TwitterEmbed from './beginner';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <TwitterEmbed />;
}
