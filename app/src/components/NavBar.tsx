import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
      <nav>
          <div className="flex flex-wrap item-center justify-between mx-auto p-8">
              <Link href={"/"} className="text-5xl text-white font-semibold" >
                  LOGO
              </Link>
              <div className="menu hidden md:block md:w-auto" id="navbar">
                  <ul>
                      <li>
                          <Link href={'#about'} className='block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl round'>About </Link>
                      </li>
                  </ul>
              </div>
          </div>
    </nav>
  )
}
