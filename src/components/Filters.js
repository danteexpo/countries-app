import React from 'react';
import { Menu } from '@headlessui/react';

const Filters = ({ setApi }) => {
  return (
    <section className='flex flex-col justify-center items-center relative md:absolute md:right-4'>
      <Menu>
        <Menu.Button className={`bg-mywhite font-semibold text-lg mt-8 shadow-lg py-3 flex justify-around items-center w-[228px] dark:bg-myblack dark:text-mywhite`}>
          Filter By Region
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:stroke-mywhite ml-2" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Menu.Button>
        <Menu.Items className={`flex flex-col bg-mywhite shadow-lg w-[228px] dark:bg-myblack dark:text-mywhite absolute top-20 md:top-20`}>
          <Menu.Item className={`py-3 pl-2`}>
            {({ active }) => (
              <button
                className={`${active && 'bg-myblue'}`}
                onClick={() => {
                  setApi(`https://restcountries.com/v3.1/region/africa`);
                }}
              >
                Africa
              </button>
            )}
          </Menu.Item>
          <Menu.Item className={`py-3 pl-2`}>
            {({ active }) => (
              <button
                className={`${active && 'bg-myblue'}`}
                onClick={() => {
                  setApi(`https://restcountries.com/v3.1/region/america`);
                }}
              >
                America
              </button>
            )}
          </Menu.Item>
          <Menu.Item className={`py-3 pl-2`}>
            {({ active }) => (
              <button
                className={`${active && 'bg-myblue'}`}
                onClick={() => {
                  setApi(`https://restcountries.com/v3.1/region/asia`);
                }}
              >
                Asia
              </button>
            )}
          </Menu.Item>
          <Menu.Item className={`py-3 pl-2`}>
            {({ active }) => (
              <button
                className={`${active && 'bg-myblue'}`}
                onClick={() => {
                  setApi(`https://restcountries.com/v3.1/region/europe`);
                }}
              >
                Europe
              </button>
            )}
          </Menu.Item>
          <Menu.Item className={`py-3 pl-2`}>
            {({ active }) => (
              <button
                className={`${active && 'bg-myblue'}`}
                onClick={() => {
                  setApi(`https://restcountries.com/v3.1/region/oceania`);
                }}
              >
                Ocenia
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </section>
  );
};

export default Filters;
