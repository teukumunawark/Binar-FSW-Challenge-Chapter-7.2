import React, { useState } from 'react';

// import link
import { Link } from 'react-router-dom';

// import Logo
import Logo from "../assets/logo.png";

// import
import { FaBars } from 'react-icons/fa';

// import Nav
import Nav from "./Navbar"
import NavMobile from "./NavMobile"

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header className='py-6 border-b bg-primary'>
      <div className='container mx-auto flex justify-between items-center relative max-w-7xl'>
        {/* Logo */}
        <img src={Logo} alt="Logo" />

        {/* Nav Items */}
        <div className='flex items-center gap-10'>
          <div className='hidden lg:flex'>
            <Nav />
          </div>

          {/* mobile nav / initially is showing / hide on large screens */}
          <div
            className={`${navMobile ? 'max-h-52' : 'max-h-0'
              } lg:hidden absolute top-16 bg-primary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>

          {/* buttons */}
          <Link 
          className='hover:bg-green-500 bg-[#5CB85F] text-white rounded-sm px-7 py-2.5 font-poppins text-sm transition'
          to='/' 
          >Register</Link>

          {/* nav trigger btn / only shows on mobile screens */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className='text-2xl text-primary cursor-pointer lg:hidden'
          >
            <FaBars className='text-slate-700'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
