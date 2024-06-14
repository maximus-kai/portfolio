'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';



export default function Hero() {
  return (
    <section>
      <motion.div
        initial={{opacity:0 , scale:0.2}}
        animate={{opacity:1, scale:1}}
        transition={{duration:1}}
        className='grid grid-cols-1  sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>   
    <h1 className="text-white text-4xl lg:text-6xl sm:text-5xl font-extrabold mb-4 ">
            <span className='text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500'>    
              Hello, I&apos;m{" "}
              <br/>

            </span> 
            <TypeAnimation
             sequence={[
        'Tomiwa',
        1000, 
        ' A Developer',
        1000,
        'A Network Engineer',
        1000,
        'A 3D Artist',
        1000
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
      />
            
      </h1>
      <p className='text-[#adb7b8] text-lg lg:text-xl mb-6 font-medium'>
   I&apos;m interested in everything technology.
   I&apos;m currently learning more about fullstack web development.
   I&apos;m looking to collaborate on web development project using javascript.
   reach me at @maximus_kai on twitter
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 hover:bg-slate-800 hover:text-black text-white'>
              Hire me
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500  text-white hover:bg-slate-800 mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-700 rounded-full px-5 py-2'>Download CV</span>
              
            </button>
          </div>
        </div>
        <div className='col-span-5 mt-4 lg:mt-0 place-self-center'>
          <div className=' rounded-full aspect-square bg-[#181818] w-[250px] h-[250px] relative'>
          <Image
              className='absolute transform -translate-x-1/2   left-1/2'
            src="/images/moi2.png"
            alt='hero image'
            width={250}
            height={250} />
        </div>
            </div>
      </motion.div>
    </section>
  )
}
