import React from 'react';
import Link from 'next/link';

interface MenuOverlayProps{
  href: string;
  title: string;
  children?: React.ReactNode;
}


const MenuOverlay: React.FC<MenuOverlayProps> = ({href,title,}) => {
  console.log('before return')
  return (
    <Link
      href={href}
      className='block py-2 text-center
           hover:text-white 
           text-[#adb7be] sm:text-xl round'
    >
    {title}
    </Link>
  )
}

export default MenuOverlay;