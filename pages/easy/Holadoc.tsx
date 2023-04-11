import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stethoscope from 'public/assets/stethoscope.svg';
import { Source_Sans_Pro } from 'next/font/google';

import Halodoctor from '/public/assets/halodoctor.svg';
import Janedoe from '/public/assets/janedoe.svg';
import RightDoubleCode from 'public/assets/rightdoublecode.svg';
import Calendar from '/public/assets/calendar.svg';
import Bell from '/public/assets/bell.svg';
import CCTV from '/public/assets/cctv.svg';

const sourceSansPro = Source_Sans_Pro({
  weight: ['300', '600'],
  subsets: ['latin'],
});

const Holadok = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) {
      document.querySelector('body')?.classList.remove('overflow-hidden');
    } else if (show) {
      document.querySelector('body')?.classList.add('overflow-hidden');
    }
  }, [show]);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Nav Mobile */}

      {show && (
        <div className="lg:hidden backdrop-opacity- bg-gray-100/50 min-h-screen min-w-full z-10 fixed transition-all ease-in duration-500">
          <nav className="bg-orange p-5  absolute min-h-[200px] min-w-[250px] z-10 top-2 left-2  bg-white border rounded-2xl  text-gray-800">
            <ul className=" flex flex-col gap-5">
              <div className="flex gap-2 justify-between items-center">
                <Image alt="stethoscope" src={stethoscope} />
                <h3
                  className={
                    sourceSansPro.className +
                    'text-[#101C45]  font-bold text-lg flex-1'
                  }
                >
                  <Link href="/easy/Holadoc">Holadok</Link>
                </h3>
                <button onClick={() => setShow((prevShow) => !prevShow)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <li>
                <Link
                  href="/easy/Holadoc"
                  className="font-bold active:font-bold "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/easy/Holadoc"
                  className="hover:font-bold font-light"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/easy/Holadoc"
                  className="hover:font-bold font-light"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/easy/Holadoc"
                  className="hover:font-bold font-light"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className="container mx-auto md:py-10 py-7 md:bg-[url('../public/assets/rectangle-background.svg')] bg-no-repeat bg-[right_top_1.3rem]  p-2">
        {/* Navbar */}
        <div className="flex items-center justify-between md:mr-20 text-[#101C45]">
          <div className="flex gap-4 mr-20 items-center ">
            <button
              className="lg:hidden"
              onClick={() => setShow((prevShow) => !prevShow)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <Link href="/easy/Holadoc">
              {' '}
              <Image alt="stethoscope" src={stethoscope} />
            </Link>
            <h3
              className={
                sourceSansPro.className + 'text-[#101C45]  font-bold text-lg'
              }
            >
              <Link href="/easy/Holadoc">Holadok</Link>
            </h3>
          </div>

          <nav className="flex-1 lg:block min-[50px]:hidden ">
            <ul className="flex gap-10">
              <li>
                <Link
                  href="/easy/Holadoc"
                  className="font-bold active:font-bold "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/easy/Holadoc"
                  className="hover:font-bold font-light"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/easy/Holadoc"
                  className="hover:font-bold font-light"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/easy/Holadoc"
                  className="hover:font-bold font-light"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-5 lg:gap-10 items-center">
            <h6 className="font-semibold dark:text-[#101C45]">
              <Link href="/easy/Holadoc">Login</Link>
            </h6>
            <button
              className="border font-semibold border-[#101C45] text-[#101C45] px-3 py-1"
              type="button"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Main */}
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-5 relative">
          <div className="bg-white border border-gray-100 p-5 rounded-3xl absolute max-w-sm right-96 top-32 xl:block min-[50px]:hidden">
            <div className="flex gap-5">
              <Image alt="janedoe" src={Janedoe} />
              <h6 className="font-bold flex-1">Jane Doe</h6>
              <Image alt="rightdoublecode" src={RightDoubleCode} />
            </div>
            <div className="mt-5">
              <p
                className={sourceSansPro.className + ' text-lg  text-[#101C45]'}
              >
                “The doctor appointment app has been great for me. Scheduling
                appointments and getting medication reminders is much easier,
                and I love the option for virtual consultations. Id recommend
                this app to others.”
              </p>
            </div>
          </div>
          <div className="md:max-w-md max-w-full my-auto grid gap-7 ">
            <div className="md:hidden max-w-sm mx-auto">
              <Image alt="halodoctor" src={Halodoctor} />
            </div>
            <h1 className="text-5xl leading-tight tracking-wide text-[#101C45]">
              Get the healthcare you need, when you need it.
            </h1>

            <p className="text-[#101C45] text-lg">
              Manage all of your healthcare needs in one convenient place – from
              booking appointments to tracking your health history.
            </p>
            <button className="border p-4 lg:justify-self-start text-white font-light bg-[#203271] md:mb-0 mb-3 ">
              <span> Book an Appointment</span>
            </button>
          </div>

          <div className="md:flex justify-self-end min-[50px]:hidden">
            <Image alt="halodoctor" src={Halodoctor} />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#203271]  text-white p-10 grid sm:grid-cols-3 gap-4 ">
          <div className="grid grid-rows-3 grid-flow-col gap-3">
            <Image alt="calendar" src={Calendar} className="row-span-3" />
            <h6 className="col-span-2">Online appointment scheduling</h6>
            <p className="row-span-2 col-span-2 text-sm font-extralight leading-6 ">
              Allows users to schedule appointments with their healthcare
              provider through the app.
            </p>
          </div>
          <div className="grid grid-rows-3 grid-flow-col gap-3">
            <Image alt="calendar" src={Bell} className="row-span-3" />
            <h6 className="col-span-2">Medication reminders</h6>
            <p className="row-span-2 col-span-2 text-sm font-extralight leading-6 ">
              Allows users to schedule appointments with their healthcare
              provider through the app.
            </p>
          </div>
          <div className="grid grid-rows-3 grid-flow-col gap-3">
            <Image alt="calendar" src={CCTV} className="row-span-3" />
            <h6 className="col-span-2">Virtual consultations</h6>
            <p className="row-span-2 col-span-2 text-sm font-extralight leading-6 ">
              Allows users to schedule appointments with their healthcare
              provider through the app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Holadok;
