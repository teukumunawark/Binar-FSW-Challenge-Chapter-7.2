import React from 'react';
import 'flowbite';

const DateDropdown = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Waktu Jemput/Ambil</label>
      <input
        id="waktu"
        type="date"
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green-500 focus:border-green-500 block w-full lg:min-w-[250px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
      </input>
    </div>
  )
}

export default DateDropdown
