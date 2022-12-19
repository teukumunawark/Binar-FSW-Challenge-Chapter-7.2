import React from 'react';

const Nav = () => {

  const navigationData = [
    {
      name: 'Our Services',
      href: '#',
    },
    {
      name: 'Why Us',
      href: '#',
    },
    {
      name: 'Testimonial',
      href: '#',
    },
    {
      name: 'FAQ',
      href: '#',
    },
  ];


  return (
    <nav>
      <ul className='flex gap-x-8 font-poppins font-medium text-slate-800'>
        {navigationData.map((item, index) => {
          return (
            <li key={index}>
              <a className='hover:text-green-500' href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
