import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import stethoscope from 'public/assets/stethoscope.svg';
import { Source_Sans_Pro } from 'next/font/google';

import Halodoctor from '/public/assets/halodoctor.svg';
import Janedoe from '/public/assets/janedoe.svg';
import RightDoubleCode from '/public/assets/RightDoubleCode.svg';
import Calendar from '/public/assets/calendar.svg';
import Bell from '/public/assets/bell.svg';
import CCTV from '/public/assets/cctv.svg';

const sourceSansPro = Source_Sans_Pro({
  weight: ['300', '600'],
  subsets: ['latin'],
});

const Holadok = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-10  bg-[url('../public/assets/rectangle-background.svg')] bg-no-repeat bg-right">
        {/* Navbar */}
        <div className="flex items-center justify-between mr-20">
          <div className="flex gap-4 mr-20">
            <Link href="/easy">
              {' '}
              <Image alt="stethoscope" src={stethoscope} />
            </Link>
            <h3
              className={
                sourceSansPro.className + 'text-[#101C45] font-bold text-lg'
              }
            >
              <Link href="/easy">Holadok</Link>
            </h3>
          </div>

          <nav className="flex-1">
            <ul className="flex gap-10">
              <li>
                <Link href="/easy" className="font-bold active:font-bold ">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/easy" className="hover:font-bold font-light">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/easy" className="hover:font-bold font-light">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/easy" className="hover:font-bold font-light">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-10 items-center">
            <h6 className="font-semibold">
              <Link href="/easy">Login</Link>
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
        <div className="grid grid-cols-2 grid-rows-1 gap-5 relative">
          <div className="bg-white border border-gray-100 p-5 rounded-3xl absolute max-w-sm right-96 top-32">
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
          <div className="max-w-md my-auto grid gap-7">
            <h1 className="text-5xl leading-tight tracking-wide">
              Get the healthcare you need, when you need it.
            </h1>
            <p className="text-[#101C45] text-lg">
              Manage all of your healthcare needs in one convenient place – from
              booking appointments to tracking your health history.
            </p>
            <button className="border p-4 justify-self-start text-white font-light bg-[#203271] ">
              <span> Book an Appointment</span>
            </button>
          </div>
          <div className="justify-self-end">
            <Image alt="halodoctor" src={Halodoctor} />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#203271] text-white p-10 grid grid-cols-3 gap-4">
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
