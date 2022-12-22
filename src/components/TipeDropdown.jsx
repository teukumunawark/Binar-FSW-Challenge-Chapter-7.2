import React from 'react';
import 'flowbite';

const TipeDropdown = () => {
  return (
    <div>
      <label htmlFor="tipe-driver" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipe Driver</label>
      <select defaultValue={'DEFAULT'} id="tipe-driver" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green-500 focus:border-green-500 block w-full lg:min-w-[250px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
        <option value="DEFAULT" disabled>Pilih Tipe Driver</option>
        <option value="Dengan Driver">Dengan Driver</option>
        <option value="Tanpa Driver">Tanpa Driver</option>
      </select>
    </div>
  )
}

export default TipeDropdown
