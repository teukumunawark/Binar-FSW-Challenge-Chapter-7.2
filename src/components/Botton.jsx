import React from 'react'

const Botton = ({ href }) => {
  return (
    <a
      href={href}
      className={`transition py-2 px-6 font-medium text-base rounded-sm inline-block bg-[#5CB85F] hover:bg-green-600 text-white`
      }>
      Register
    </a>
  )
}

export default Botton