'use client'
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import TabData from './TabData';

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();
    
    const HandleTabChange = (id:string) => {
        startTransition(() => {
            setTab(id)
        })
    }
   
  return (
      <section className=' text-white '>
          <div className='md:grid md:grid-cols-2 h-full gap-8 xl:gap-16 items-center py-8 sm:py-16 px-4 xl:px-16'>
              <Image
                  src="/images/devdesk.jpg"
                  alt='hero image'
                  width={500}
                 height={500}
              />
              <div className='flex flex-col h-full'>
                  <h1 className='text-4xl font-bold text-white mb-4 mt-4 md:mt-0 '> About Me</h1>
                  <p className='text-base md:text-l'>
                  I&apos;m interested in everything technology.
                I&apos;m currently learning more about fullstack web development.
                I&apos;m looking to collaborate on web development project using javascript.
                reach me at @maximus_kai on twitter
                  </p>
                  <div className="flex flex-row mt-8">
                      <TabButton selectTab={() => HandleTabChange('skills')} active={tab === 'skills'} >
                      Skills
                          </TabButton>
                      <TabButton selectTab={() => HandleTabChange('Education')} active={tab === 'Education'} >
                      Education
                          </TabButton>
                      <TabButton selectTab={() => HandleTabChange('Certification')} active={tab === 'Certification'} >
                      Certification
                          </TabButton>
                      
                  </div>
                  
                  <TabData active={tab === 'skills'}>

                <li className='pr-2'>Node</li>
                <li className='pr-2'>Express</li>
                <li className='pr-2'>React</li>
                <li className='pr-2'>Next js</li>
                <li className='pr-2'>Mongo DB</li>
                <li className='pr-2'>Firebase</li>
                <li className='pr-2'>Postman</li>
                <li className='pr-2'>GraphQL</li>
                <li className='pr-2'>HTML5</li>
                <li className='pr-2'>CSS3</li>
                <li className='pr-2'>Tailwind CSS</li>
                <li className='pr-2'>BootStrap5</li>
                <li className='pr-2'>python 3</li>
                <li className='pr-2'>Blender 3D</li>
                <li className='pr-2'>Adobe Illustrator</li>
                <li className='pr-2'>Adobe Photoshop</li>
                <li className='pr-2'>Adobe Aftereffect</li>
                <li className='pr-2'>Davinci Resolve</li>
                <li className='pr-2'>Arduino C</li>
                <li className='pr-2'>Mikrotik RouterBoard</li>
                <li className='pr-2'>Acoustic Guitar</li>
            
                 </TabData>
                  <TabData active={tab === 'Education'}>
                  
                      <li>Federal University of Agriculture Abeokuta </li>
                      
                 </TabData>
                  <TabData active={tab === 'Certification'}>
                 
                <li className='pr-2'>Google/Andela 2019</li>
                <li className='pr-2'>MTCNA 2023</li>
                <li className='pr-2'>YAPPI 2023</li>
            
                 </TabData>
              </div>
          </div></section>
  )
}

export default AboutSection;