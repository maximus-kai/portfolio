import Link from 'next/link';
import React from 'react';

interface NavLinkProps{
  href: string;
  title: string;
  children?: React.ReactNode;
}

 const NavLink: React.FC<NavLinkProps> = ({href, title, children})=> {
  return (
      <Link
          href={href}
          className='block py-2 pl-3
           hover:text-white pr-4
           text-[#adb7be] sm:text-xl round'>
          {title}
      </Link>
  )
}
export default NavLink;