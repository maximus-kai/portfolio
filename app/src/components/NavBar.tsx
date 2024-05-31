'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import { Bars3Icon,XMarkIcon, FireIcon } from '@heroicons/react/16/solid';


const navLinks = [
    {
        title: 'About',
        path: 'about'
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
const NavBar: React.FC = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
  return (
      <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212]  bg-opacity-90'>
          <div className="flex flex-wrap item-center justify-between mx-auto p-8">
              <Link href={"/"} className="text-2xl md:text-5xl text-white  mt-10font-semibold" >
                  <FireIcon className='text-purple-500 flex items-center hover:text-white h-10 w-10 '/>
              </Link>
              <div className="mobile-menu block md:hidden">
                  {
                      !navBarOpen ? (<button onClick={()=>setNavBarOpen(true)} className=''>
                          <Bars3Icon className='text-slate-200 flex items-center border rounded border-slate-200 hover:border-white h-5 w-5 mt-3' />
                      </button>):
                          (<button onClick={()=> setNavBarOpen(false) } className=''>
                     <XMarkIcon className='text-slate-200 flex items-center border rounded border-slate-200 hover:border-white h-5 w-5 mt-3'/>
                  </button>)
                          
                  }
              </div>
              <div className="menu hidden md:block md:w-auto " id="navbar">
                  
                 

              <ul className='flex p-4 md:p-0 md:flex-row '>{navLinks.map((link, index) =>(
                      <li key={index}>
                          <NavLink href={link.path} title={link.title} > {link.title} </NavLink>
                      </li>
                  )
                )
                }
                  </ul>
              </div>
          </div>
          {navBarOpen ? <MenuOverlay/>: null}
    </nav>  
  )
}
export default NavBar;
