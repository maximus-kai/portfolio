import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
    return (
        <>
    <h2 className='text-4xl font-bold text-white mb-4 mt-4 md:mt-0 text-center'>My Projects</h2>
    <ProjectCard ImageUrl='/images/1.jpg' title='' description='Description'/>
        </>
  )
}

export default ProjectsSection