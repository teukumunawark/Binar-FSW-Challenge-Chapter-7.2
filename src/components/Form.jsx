import { useState } from 'react';
import { useDispatch } from "react-redux";

import TipeDropdown from '../components/TipeDropdown';
import TimeDropdown from '../components/TimeDropdown';
import DateDropdown from '../components/DateDropdown';
import AmountForm from '../components/AmountForm';
import Botton from '../components/Botton';

import {
  fetchData,
  filterByCapacity,
} from "../slices/carsSlice";

const Form = () => {

  const dispatch = useDispatch();
  const [capacity, setCapacity] = useState(0);

  const handleFilter = (e) => {
    e.preventDefault();

    dispatch(fetchData()).then(() => {
      // if (driver == "true") dispatch(filterByDriver(true));

      // if (driver == "false") dispatch(filterByDriver(false));

      // if (date && time)
      //   dispatch(filterByDateAndTime(`${date}T${time}:00.000Z`));

      if (capacity) dispatch(filterByCapacity(capacity));
    });
  };

  return (
    <form onSubmit={handleFilter}>
      <div className='px-10 py-8 max-w-7xl rounded-xl mx-auto flex flex-col lg:flex-row justify-between relative lg:-top-24 bg-white lg:shadow-sm'>
        <TipeDropdown />
        <DateDropdown />
        <TimeDropdown />
        <AmountForm onChange={(e) => setCapacity(e.target.value)} />
        <div className='items-end flex pt-5 lg:pt-0'>
          <Botton type={'submit'} title={'Cari Mobil'} />
        </div>
      </div>
    </form>
  );
}

export default Form