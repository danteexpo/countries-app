import React from 'react';

const Search = ({ search, setSearch, setApi }) => {
  return (
    <form className='mt-8 mx-auto flex justify-center items-center shadow-lg py-4 w-[288px] bg-mywhite dark:bg-myblack md:ml-4'>
      <button onClick={e => {
        e.preventDefault();
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:stroke-mywhite" fill="none" viewBox="0 0 24 24" stroke="black">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      <input type="text" onChange={e => {
        setSearch(e.target.value);
        if(search.length >= 3){
          setApi(`https://restcountries.com/v3.1/name/${search}`);
        }
      }} placeholder='Search...' className='outline-none pl-4 bg-mywhite dark:bg-myblack dark:text-mywhite' />
    </form>
  );
};

export default Search;
