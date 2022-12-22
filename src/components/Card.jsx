import React from 'react'
import 'flowbite';
import currencyFormat from "../util/currencyFormat";




import { FiUsers, FiCalendar, FiSettings } from "react-icons/fi";

const Card = ({ data }) => {
  return (
    <div>
      <div className="max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5">
        <img className="rounded-t-xl max-h-[300px] min-h-[300px] w-full object-cover" src={data.image} alt="" />
        <div className="pt-5 space-y-2">
          <p className='font-poppins font-medium'>{`${data.manufacture} ${data.model}`}</p>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Rp. {currencyFormat(data.rentPerDay)} /hari</h5>
          <p className="mb-3 font-normal text-gray-700 font-poppins text-[14px]">{data.description}</p>
          <div className='text-gray-500 space-y-4 pt-3'>
            <p className='font-poppins font-medium flex items-center gap-3'><FiUsers className=' text-[22px]' />{data.capacity}</p>
            <p className='font-poppins font-medium flex items-center gap-3'><FiSettings className=' text-[22px]' />{data.transmission}</p>
            <p className='font-poppins font-medium flex items-center gap-3'><FiCalendar className=' text-[22px]' />{data.availableAt.split("T", 1)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
