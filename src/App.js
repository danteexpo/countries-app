import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Filters from './components/Filters';
import Countries from './components/Countries';

const App = () => {

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if(enabled){
      document.body.classList.add('bg-mylightblack');
      document.body.classList.remove('bg-mygray');
    } else {
      document.body.classList.add('bg-mygray');
      document.body.classList.remove('bg-mylightblack');
    }
  });

  return (
    <div className={`${enabled? 'dark' : ''} font-inter`}>
      <Router>
        <Navbar enabled={enabled} setEnabled={setEnabled} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/name/:id' element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

const Home = () => {

  let [search, setSearch] = useState('');

  let [fetchedData, updateFetchedData] = useState([]);

  let [api, setApi] = useState(`https://restcountries.com/v3.1/subregion/south%20america`);

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
      return () => {
        data = [];
      };
    })()
  }, [api])

  return (
    <>
      <div className='md:flex md:justify-center md:items-center'>
        <Search search={search} setSearch={setSearch} setApi={setApi} />
        <Filters setApi={setApi}/>
      </div>
      <div className='md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 dark:text-mywhite'>
        <Countries fetchedData={fetchedData} />
      </div> 
    </>
  )
}

export default App;
