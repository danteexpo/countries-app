import React from 'react';
import { Switch } from '@headlessui/react';
import { Link } from 'react-router-dom';

const Navbar = ({ enabled, setEnabled }) => {
  return (
    <nav className='bg-mywhite dark:bg-myblack flex flex-col justify-center items-center py-4 shadow-lg sm:flex-row sm:justify-between'>
      <Link to='/' >
        <h1 className='font-bold text-2xl dark:text-mywhite sm:ml-4'>Where in the world?</h1>
      </Link>
      <div className='flex justify-center items-center mt-4 sm:mt-0 sm:mr-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:stroke-mywhite" fill="none" viewBox="0 0 24 24" stroke="black">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-mywhite' : 'bg-myblack'}
            mx-4 relative inline-flex flex-shrink-0 h-[38px] w-[76px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-mywhite focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-9 bg-myblack left-2px' : 'translate-x-0 bg-mywhite left-px'}
              pointer-events-none inline-block h-[32px] w-[32px] absolute top-px rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200 delay-300`}
          />
        </Switch>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:stroke-mywhite" fill="none" viewBox="0 0 24 24" stroke="black">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
