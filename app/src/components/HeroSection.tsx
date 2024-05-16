import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>   
    <h1 className="text-white text-4xl lg:text-6xl sm:text-5xl font-extrabold mb-4 ">
      HORNS OF A DILEMMA
      </h1>
      <p className='text-[#adb7b8] text-lg lg:text-xl mb-6 font-medium'>
      My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions and loyal servant to the true emperor, Marcus Aurelius!
          </p>
          <div>
            <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>
              To Be
            </button>
            <button className='px-6 py-3 rounded-full bg-transparent border border-white text-white hover:bg-slate-800 mt-3'>
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
