import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>   
    <h1 className="text-white text-4xl lg:text-6xl sm:text-5xl font-extrabold mb-4 ">
            <span className='text-transparent text-white bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500'>
            Hello, I'm{" "}
            </span> 
            Tomiwa
      </h1>
      <p className='text-[#adb7b8] text-lg lg:text-xl mb-6 font-medium'>
   I am interested in everything technology.
   I am currently learning more about fullstack web development.
   I am looking to collaborate on web development project using javascript.
   How to reach me at maximus_kai on twitter
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 hover:bg-slate-200 text-white'>
              To Be
            </button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent border border-white text-white hover:bg-slate-800 mt-3'>
              Not To Be             </button>
          </div>
        </div>
        <div className='col-span-5 mt-4 lg:mt-0 place-self-center'>
          <div className=' rounded-full aspect-square bg-[#181818] w-[250px] h-[250px] relative'>
          <Image
              className='absolute transform -translate-x-1/2   left-1/2'
            src="/images/dev.png"
            alt='hero image'
            width={250}
            height={250} />
        </div>
            </div>
      </div>
    </section>
  )
}
