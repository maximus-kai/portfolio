import React from 'react'

interface TypeButtonMap{
    name:string
    onClick: any;
    isSelected: boolean;
    children?:string
}

const TypeButton: React.FC<TypeButtonMap> = ({ name, onClick, isSelected,children }) => {
    const buttonClass = isSelected? 'border-purple-500 ':'border-slate-600 hover:border-white'
  return (
      <div>
          <button onClick={()=>onClick(name)} className={`rounded-full border-2 px-6 py-1 ${buttonClass}cursor-pointer text-xl`}>{children}</button>
    </div>
  )
}

export default TypeButton