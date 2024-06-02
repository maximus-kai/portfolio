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
          <div className='md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-8 sm:py-16 px-4 xl:px-16'>
              <Image
                  src="/images/devdesk.jpg"
                  alt='hero image'
                  width={500}
                 height={500}
              />
              <div>
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

                <li>Node</li>
                <li>Express</li>
                <li>React</li>
                <li>Next js</li>
                <li>Mongo DB</li>
                <li>Firebase</li>
                <li>Postman</li>
                <li>GraphQL</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwind CSS</li>
                <li>BootStrap5</li>
                <li>python 3</li>
                <li>Blender 3D</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Aftereffect</li>
                <li>Davinci Resolve</li>
                <li>Arduino C</li>
                <li>Mikrotik RouterBoard</li>
                <li>Acoustic Guitar</li>
            
                 </TabData>
                  <TabData active={tab === 'Education'}>
                  
                      <li>Federal University of Agriculture Abeokuta </li>
                      
                 </TabData>
                  <TabData active={tab === 'Certification'}>
                 
                <li>Google/Andela 2019</li>
                <li>MTCNA 2023</li>
                <li>YAPPI 2023</li>
            
                 </TabData>
              </div>
          </div></section>
  )
}

export default AboutSection;