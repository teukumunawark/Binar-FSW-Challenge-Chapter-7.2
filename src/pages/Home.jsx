import React from 'react';

import Hero from '../components/Hero';
import Card from '../components/Card';

const Home = () => {
  return (
    <section >
      <Hero />
      <section className='min-h-screen max-w-full px-5 lg:px-0'>
        <div className='bg-white grid grid-col-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl lg:mx-auto px-1'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </section>
  )
}

export default Home
