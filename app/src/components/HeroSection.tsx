import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center'>   
    <h1 className="text-white text-4xl lg:text-6xl font-extrabold mb-4 ">
        LOREM IP SUMM
      </h1>
      <p className='text-[#adb7b8] text-lg lg:text-xl font-medium'>
        Loem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officiis explicabo, esse iusto ullam quis, facilis voluptates rem similique sed ab accusantium maxime. Voluptate mollitia quod placeat! Accusamus, sint alias!
      </p>
        </div>
        <div className='col-span-5'>
          <div className='mt-5 rounded-full aspect-square bg-[#181818] w-[500px] h-[400px] relative'>
            
        </div>
            </div>
      </div>
    </section>
  )
}
