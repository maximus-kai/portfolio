import React from 'react'
import Image from 'next/image'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

interface ProjectCardProps{
    ImageUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    previewUrl: string;
}

const ProjectCard:React.FC<ProjectCardProps> = ({ImageUrl,title,description,gitUrl,previewUrl}) => {
  return (
    <div>
      <div className='relative  group'>
        <Image
          className='h-52 md:h-72 bg-cover rounded-t-xl '
              src={ImageUrl}
              alt='project 1'
              width={500}
              height={500} />
        <div className='
        overlay 
        items-center
        justify-center
        absolute
        top-0
        left-0
        w-full
        h-full
        bg-[#181818]
        bg-opacity-0
        hidden
        group-hover:flex
        group-hover:bg-opacity-80
        transition-all
        duration-500 '>
          <Link href={gitUrl} className='h-14 w-14 border-2 relative mr-5 rounded-full border-[#adb7be] hover:border-white'>
            <CodeBracketIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white'/>
          </Link>
          <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white'>
            <EyeIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white'/>
          </Link>

        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4" >
          <h5 className='text-xl font-extrabold mb-2'>{title}</h5>
          <p className='text-[#adb7be]' >{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard