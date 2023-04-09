import React, { useState } from 'react';
import Image from 'next/image';
import { Source_Sans_Pro } from 'next/font/google';

import FaRegHeart from 'react-icons/fa';

import twitterUser from 'public/assets/twitter-user.svg';
import twitterLogo from 'public/assets/twitter.svg';
import heartButton from 'public/assets/heart.svg';

const sourceSansPro = Source_Sans_Pro({
  weight: ['300', '600'],
  subsets: ['latin'],
});

const TwitterEmbed = () => {
  const [like, setLike] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full mx-4 bg-[#243447] p-6 rounded-md ">
        <div className="flex items-center justify-between mb-4 overflow-hidden gap-3 ">
          <div className="flex gap-3 sm:gap-6 shrink-0">
            <Image alt="twitter-user" src={twitterUser} />
            <div>
              <p className={sourceSansPro.className[600]}>John Doe</p>
              <p className="font-light text-slate-400">@realjohndoe</p>
            </div>
          </div>
          <Image alt="twitter-logo" src={twitterLogo} />
        </div>
        <div className="mb-4">
          <p className={sourceSansPro.className + ' break-words'}>
            Why do they call it &apos;debugging&apos; when it feels more like
            &apos;wildly guessing and hoping for the best&apos;?
            <span className="text-blue-400"> #programming</span>
            <span className="text-blue-400"> #coding</span>
            <span className="text-blue-400"> #debugging</span>
          </p>
        </div>
        <div className="flex items-center gap-7 overflow-hidden">
          <div className="flex items-center justify-between gap-3 shrink-0">
            <button
              className="shrink-0"
              onClick={() => setLike((prevLike) => !prevLike)}
            >
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6  ${like ? 'stroke-pink-500' : ''}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                {/* {like && <p className="text-pink-500">10000</p>} */}
              </div>
            </button>
            <p
              className={`font-normal ${
                like ? 'text-pink-500' : 'text-gray-400'
              }`}
            >
              {like ? '651' : '650'}
            </p>
          </div>
          <p className="font-normal text-gray-400 shrink-0">
            3:40 PM – Feb 24, 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwitterEmbed;
