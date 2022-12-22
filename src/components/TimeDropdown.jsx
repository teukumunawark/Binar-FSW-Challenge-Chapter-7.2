import React from 'react'

const TimeDropdown = () => {
  return (
    <div>
      <label htmlFor="waktu" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Waktu Jemput/Ambil</label>
      <select id="waktu" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green-500 focus:border-green-500 block w-full lg:min-w-[250px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
        <option selected>Pilih Waktu</option>
        <option value="Dengan Driver">United States</option>
        <option value="Tanpa Driver">Canada</option>
      </select>
    </div>
  )
}

export default TimeDropdown
