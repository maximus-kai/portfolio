

import React from 'react'


interface TabDataProps{
    active: boolean;
    children?:React.ReactNode;
}
const TabData: React.FC<TabDataProps> = ({ active,children }) => {
  const buttonClasses = active? 'text-white': 'hidden'
  return (
      <button className={` text-left list-disc pt-4 ${buttonClasses} `}> 
              {children }
    </button>
  )
}

export default TabData;

// list-none