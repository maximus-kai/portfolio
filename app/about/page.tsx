import React from 'react'
import Link from 'next/link'
const AboutPage = () => {
  return (
    <div className='bg-[#121212] flex min-h-screen flex-col text-center text-xl  text-white'>
      <h1>
      AboutPage
      </h1>
      <Link href={'./'}>
        Back
      </Link>
    </div>
  )
}

export default AboutPage