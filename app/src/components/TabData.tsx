

import React from 'react'


interface TabDataProps{
    active: boolean;
    children?:React.ReactNode;
}
const TabData: React.FC<TabDataProps> = ({ active,children }) => {
  const buttonClasses = active? 'text-white': 'hidden'
  return (
      <button className={` flex flex-wrap mt-6 text-left pt-4  pb-2  list-none hover:list-disc before:list-disc before:text-blue-500 ${buttonClasses} `}> 
              {children }
    </button>
  )
}

export default TabData;

// list-none