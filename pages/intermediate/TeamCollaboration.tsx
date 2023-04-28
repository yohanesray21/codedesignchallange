import React from 'react';
import { Nunito_Sans } from 'next/font/google';
import Image from 'next/image';
import RectangleBackground from 'public/assets/intermediate/teamCollaboration/rectangle.svg';
import Mask from 'public/assets/intermediate/teamCollaboration/maskBackground.svg';
import bgFAFAFA from 'public/assets/intermediate/teamCollaboration/bgFAFAFA.svg';
import Logo from 'public/assets/intermediate/teamCollaboration/teamflow.svg';
import Link from 'next/link';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['200', '300', '400', '600', '700', '800', '900'],
});

const TeamCollaboration = () => {
  return (
    <div className="min-h-screen font-team ">
      <div id="hero" className="h-[977px]">
        <div>
          <div className="absolute top-0 z-[-10]">
            <Image alt="bgFAFAFA" className="z-[-20]" src={bgFAFAFA} />
          </div>
          <div className="absolute z-[-10]">
            <Image alt="RectangleBackground" src={RectangleBackground} />
          </div>
          <div className="absolute top-0 z-[-10]">
            <Image alt="RectangleBackground" src={Mask} />
          </div>
        </div>

        <div
          id="navigation"
          className="pt-[60px] px-32 flex align-middle justify-between flex-1 shrink-0"
        >
          <Link href="">
            <Image src={Logo} alt="" />
          </Link>
          <nav className="text-white flex gap-x-10">
            {['Product', 'Solution', 'Enterprise', 'Pricing'].map(
              (nav, index) => {
                return (
                  <Link
                    className="self-center hover:text-yellow-300"
                    href=""
                    key={index}
                  >
                    <ul>{nav}</ul>
                  </Link>
                );
              }
            )}
          </nav>
          <div className="flex gap-x-4">
            <button className="text-slate-500 px-4 py-2 rounded-lg  hover:outline hover:outline-1 hover:outline-yellow-300 hover:text-[#1F1F1F]">
              Login
            </button>
            <button className="text-[#1F1F1F] bg-yellow-300 px-4 py-2 rounded-lg hover:text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="text-[1F1F1F#]">Hello</div>
    </div>
  );
};

export default TeamCollaboration;
