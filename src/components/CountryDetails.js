import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = () => {

  const { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);

  let api = `https://restcountries.com/v3.1/alpha/${id}`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
      return () => {
        data = [];
      };
    })()
  }, [api])

  let display;

  if(fetchedData.status !== 404) {
    display = fetchedData.map((country) => {
    let { name, cca2, flags, population, region, subregion, capital, independent } = country;
    return (
      <div key={cca2} className='mt-8 mb-8 flex flex-col justify-center items-center'>
        <Link to='/'>
          <svg xmlns="http://www.w3.org/2000/svg" className="mb-8 h-10 w-10 bg-mywhite rounded-full p-2 dark:bg-myblack dark:stroke-mywhite" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <img src={flags.svg} alt="" className='w-64 md:w-80 xl:w-96'/>
        <div className='bg-mywhite w-64 flex flex-col dark:bg-myblack dark:text-mywhite md:w-80 xl:w-96'>
          <h5 className="font-bold text-xl self-center py-2">{name.common}</h5>
          <div className="font-light text-sm pb-3 pl-3">
            <p><span className='font-medium'>Population: </span>{population}</p>
            <p><span className='font-medium'>Region: </span>{region}</p>
            <p><span className='font-medium'>Subregion: </span>{subregion}</p>
            <p><span className='font-medium'>Capital: </span>{capital}</p>
            <p><span className='font-medium'>Independent: </span>{independent? 'Yes' : 'No'}</p>
            <p><span className='font-medium'>Code: </span>{cca2}</p>
          </div>
        </div>
      </div>
    )
    })
    } else {
        display = "No countries found.";
        return <div className='flex flex-col justify-center items-center mt-8'>{display}</div>
    }
    return <>{display}</>
};

export default CountryDetails;
