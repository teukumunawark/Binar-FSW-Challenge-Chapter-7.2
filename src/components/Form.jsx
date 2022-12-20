import React from 'react';

import TipeDropdown from '../components/TipeDropdown';
import TimeDropdown from '../components/TimeDropdown';
import DateDropdown from '../components/DateDropdown';
import AmountForm from '../components/AmountForm';
import Botton from '../components/Botton'

const Form = () => {
  return (
    <div className='px-10 py-8 max-w-7xl rounded-xl mx-auto flex flex-col lg:flex-row justify-between relative lg:-top-16 bg-white lg:shadow-sm'>
      <TipeDropdown />
      <DateDropdown />
      <TimeDropdown />
      <AmountForm />
      <div className='items-end flex pt-5 lg:pt-0'>
      <Botton href={'/'} title={'Cari Mobil'}/>
      </div>
    </div>
  );
}

export default Form