import React from 'react'
import 'flowbite';

import { FiUsers, FiCalendar, FiSettings } from "react-icons/fi";

const Card = () => {

  const img = 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200';

  return (
    <div>
      <div className="max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5">
        <a href="#">
          <img className="rounded-t-xl max-h-[300px] min-h-[300px] w-full bg-cover" src={img} alt="" />
        </a>
        <div className="pt-5 space-y-2">
          <p className='font-poppins font-medium'>Nama / Tipe Mobil</p>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Rp 430.000 / hari</h5>
          <p className="mb-3 font-normal text-gray-700 font-poppins text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='text-gray-500 space-y-4 pt-3'>
            <p className='font-poppins font-medium flex items-center gap-3'><FiUsers className=' text-[22px]' /> 4 orang</p>
            <p className='font-poppins font-medium flex items-center gap-3'><FiSettings className=' text-[22px]' /> Manual</p>
            <p className='font-poppins font-medium flex items-center gap-3'><FiCalendar className=' text-[22px]' /> Tahun 2020</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
