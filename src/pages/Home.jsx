import React from 'react';
import Hero from '../components/Hero';
import Search from '../components/Form';
import Card from '../components/Card';


import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectData, fetchData } from "../slices/carsSlice";



const Home = () => {

  const data = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <section >
      <Hero />
      <Search />
      <section className='min-h-screen max-w-full px-5 lg:px-0'>
        <div className='bg-white grid grid-col-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl lg:mx-auto px-1'>
          {data.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
        {data.length === 0 && (
          <div className='bg-white grid grid-col-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl lg:mx-auto px-1'>
            <div class="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Information </span>Item yang anda cari tidak ada, kami tidak menemukan item sejenis itu, mohon coba lagi untuk mencari item yang tersedia
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  )
}

export default Home
