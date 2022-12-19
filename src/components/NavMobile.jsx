import React from 'react';


const NavMobile = () => {
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
    <ul className='flex flex-col px-8 py-8 gap-y-4 font-poppins font-medium text-slate-800'>
      {navigationData.map((item, index) => {
        return (
          <li key={index}>
            <a className='hover:text-green-500' href={item.href}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMobile;
