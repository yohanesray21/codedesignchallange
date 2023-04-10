import React from 'react';

const Switcher = () => {
  return (
    <div>
      <button
        id="theme-toggle"
        type="button"
        className="text-gray-500 dark:bg-[#243447] dark:text-white dark:border-white hover:bg-gray-100 focus:outline-none focus:ring-gray-200 rounded-lg border-2 border-gray-500 text-sm p-2.5 "
        onClick={() => {
          let IconLightButton = document.getElementById(
            'theme-toggle-light-icon'
          );

          let IconDarkButton = document.getElementById(
            'theme-toggle-dark-icon'
          );

          if (localStorage.theme === 'dark') {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');

            IconDarkButton?.classList.add('hidden');
            IconLightButton?.classList.remove('hidden');
          } else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');

            IconLightButton?.classList.add('hidden');
            IconDarkButton?.classList.remove('hidden');
          }
        }}
      >
        <svg
          id="theme-toggle-dark-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="hidden w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>

        <svg
          id="theme-toggle-light-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="hidden w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Switcher;
