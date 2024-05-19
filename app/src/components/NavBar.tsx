import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink'

const navLinks = [
    {
        title: 'About',
        path: '#About'
    },
    {
        title: 'Projects',
        path: '#Projects'
    },
    {
        title: 'Contacts',
        path: '#Contacts'
    }
]
export default function NavBar() {
  return (
      <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212]  bg-opacity-90'>
          <div className="flex flex-wrap item-center justify-between mx-auto p-8">
              <Link href={"/"} className="text-2xl md:text-5xl text-white  mt-10font-semibold" >
                  LOGO
              </Link>
              <div className="menu hidden md:block md:w-auto " id="navbar">
              <ul className='flex p-4 md:p-0 md:flex-row '>{navLinks.map((link, index) =>(
                      <li key={index}>
                          <NavLink href={'link.path'} title={link.title} >{link.title} </NavLink>
                      </li>
                  )
                )
                }
                  </ul>
              </div>
          </div>
    </nav>
  )
}
