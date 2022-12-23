import React from 'react'
import { Link } from 'react-router-dom';


const Botton = ({ type, title }) => {
  return (
    <button
      type={type}
      className='hover:bg-green-500 bg-[#5CB85F] text-white rounded-sm px-8 py-2.5 font-poppins text-sm transition text-center'>
      {title}
    </button>
  )
}

export default Botton