import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
      <div>Go To : </div>
      <ol>
        <li className="text-blue-500 hover:text-blue-900">
          <Link href="/beginner/TwitterEmbed">1. TwitterEmbed</Link>
        </li>
        <li className="text-blue-500 hover:text-blue-900">
          <Link href="/easy/Holadoc">2. Holadoc</Link>
        </li>
      </ol>
    </div>
  );
}
