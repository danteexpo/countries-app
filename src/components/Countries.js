import React from 'react';
import { Link } from 'react-router-dom';

const Countries = ({ fetchedData }) => {
  let display;
  if(fetchedData.status !== 404) {
    display = fetchedData.map((country) => {
    let { name, cca2, flags, population, region, capital } = country;
    return (
      <Link
        style={{ textDecoration:"none" }} 
        to={`/name/${cca2}`} 
        key={cca2} 
        className='my-8 flex flex-col justify-center items-center'
      >
        <div>
          <img src={flags.svg} alt="" className='w-56'/>
          <div className='bg-mywhite w-56 flex flex-col dark:bg-myblack dark:text-mywhite'>
            <h5 className="font-bold text-xl self-center py-2">{name.common}</h5>
            <div className="font-light text-sm pb-3 pl-3">
              <p><span className='font-medium'>Population: </span>{population}</p>
              <p><span className='font-medium'>Region: </span>{region}</p>
              <p><span className='font-medium'>Capital: </span>{capital}</p>
            </div>
          </div>
        </div>
      </Link>
    )
    })
    } else {
        display = "No countries found.";
        return <div className='flex flex-col justify-center items-center mt-8'>{display}</div>
    }
    return <>{display}</>
};

export default Countries;
