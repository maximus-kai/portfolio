import React from 'react'
import Image from 'next/image'

interface ProjectCardProps{
    ImageUrl: string;
    title: string;
    description: string;
}

const ProjectCard:React.FC<ProjectCardProps> = ({ImageUrl,title,description}) => {
  return (
      <div className='border bprder-round-full'>
         <Image
              className='absolute transform -translate-x-1/2 bg-cover  left-1/2'
            src={ImageUrl}
            alt='project 1'
            width={500}
              height={500} />
          <h1 className=''>{ description}</h1>
    </div>
  )
}

export default ProjectCard