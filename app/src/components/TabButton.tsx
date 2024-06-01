import React from 'react'

interface TabButtonProps{
    active: boolean;
    selectTab: any;
    children?:React.ReactNode;
}
const TabButton:React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active? 'text-white border-b border-purple-500': 'text-[#adb7be]'
  return (
      <button onClick={selectTab} className={` mr-3 font-semibold  hover:text-white ${buttonClasses}`}> 
              {children }
    </button>
  )
}

export default TabButton