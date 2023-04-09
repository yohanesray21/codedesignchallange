import Image from 'next/image';
import { Inter } from 'next/font/google';
import TwitterEmbed from '@/components/beginner';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <TwitterEmbed />;
}
