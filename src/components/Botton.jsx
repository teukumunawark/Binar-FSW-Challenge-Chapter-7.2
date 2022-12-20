import React from 'react'
import { Link } from 'react-router-dom';


const Botton = ({ href, title }) => {
  return (
    <Link
      className=
      'hover:bg-green-500 bg-[#5CB85F] text-white rounded-sm px-8 py-2.5 font-poppins text-sm transition text-center'
      to={href}
    >{title}</Link>
  )
}

export default Botton