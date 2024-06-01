'use client'
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();
    
    const HandleTabChange = (id:string) => {
        startTransition(() => {
            setTab(id)
        })
    }
    const TAB_DATA = [
        {
            title: 'skills',
            id: 'skills',
            content: (
                <ul>
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
                </ul>
            )
        },
        {
            title: 'Education',
            id: 'Education',
            content: (
                <ul>
                    <li>Federal University of Agriculture Abeokuta </li>
                </ul>
            )
        },
        {
            title: 'Certification',
            id: 'Certification',
            content: (
                <ul>
                    <li>Google/Andela 2019</li>
                    <li>MTCNA 2023</li>
                    <li>YAPPI 2023</li>
                </ul>
            )
        }
    ]
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
                  {<p>{ TAB_DATA[0].content}</p>}
                  {<p>{ TAB_DATA[1].content}</p>}
                  {<p>{ TAB_DATA[2].content}</p>}
                  
              </div>
          </div></section>
  )
}

export default AboutSection;