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
            <Card key={index} data={data}/>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Home
