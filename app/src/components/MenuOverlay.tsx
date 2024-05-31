import React from 'react';
import NavLink from './NavLink';

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

console.log('menu overlay component')
const MenuOverlay = () => {
  console.log('before return')
  return (
    <ul className='flex flex-col py-4 items-center text-white'>
      {navLinks[2].title}
    </ul>
  )
}

export default MenuOverlay;

// linkk :MenuOverlayProps