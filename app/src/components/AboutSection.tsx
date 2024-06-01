import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
      <section className=' text-white '>
          <div className='md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-8 sm:py-16 px-4 xl:px-16'>
              <Image
                  src="/images/devdesk.jpg"
                  alt='hero image'
                  width={500}
                 height={500}
              />
              <div>
                  <h1> About Me</h1>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro optio maiores ab asperiores non eum placeat minima molestias ut ad ipsum explicabo, consectetur excepturi libero accusamus quod qui unde?
                  </p>
              </div>
          </div></section>
  )
}

export default AboutSection;