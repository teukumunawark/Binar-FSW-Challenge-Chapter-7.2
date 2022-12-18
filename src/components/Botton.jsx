import React from 'react'

const Botton = ({ href }) => {
  return (
    <button
      href={href}
      type="button"
      className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-8 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Register
    </button>
  )
}

export default Botton