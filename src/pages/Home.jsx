import React from 'react';

import Hero from '../components/Hero';
import Card from '../components/Card';

const Home = () => {
  return (
    <section >
      <Hero />
      <section className='min-h-screen max-w-full'>
        <div className='bg-white grid grid-cols-3 gap-6 max-w-7xl mx-auto px-1'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </section>
    </section>
  )
}

export default Home
