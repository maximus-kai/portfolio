'use client'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import TypeButton from './TypeButton'


const projectsData = [
    {
        id: 1,
        title: 'Project One',
        description:'First Project',
        image: '/images/1.jpg',
        gitUrl: '/',
        previewUrl:'/',
        tag: ['All','Web'],
    },
    {
        id: 1,
        title: 'Project Two',
        description:'Second Project',
        image: '/images/2.jpg',
        gitUrl: '/',
        previewUrl:'/',
        tag: ['All','Web'],
    },
    {
        id: 1,
        title: 'Project Three',
        description:'Third Project',
        image: '/images/3.jpg',
        gitUrl: '/',
        previewUrl:'/',
        tag: ['All','Web'],
    },
    {
        id: 1,
        title: 'Project Four',
        description:'Forth Project',
        image: '/images/4.jpg',
        gitUrl: '/',
        previewUrl:'/',
        tag: ['All','Mobile'],
    },
    {
        id: 1,
        title: 'Project Five',
        description:'Fifth Project',
        image: '/images/5.jpg',
        gitUrl: '/',
        previewUrl:'/',
        tag: ['All','Mobile'],
    },
    {
        id: 1,
        title: 'Project Six',
        description:'Sixth Project',
        image: '/images/6.jpg',
        gitUrl: '/',
        previewUrl:'/',
        tag: ['All','Mobile'],
    },
]


const ProjectsSection = () => {
    const [tag, setTag] = useState('All');

    const HandleChange = (newTag: string) => {
        setTag(newTag)
    };
    const filteredProjects = projectsData.filter((each) => 
        each.tag.includes(tag)
    )
    return (
        <>
            <h2 className='text-4xl  font-bold text-white mb-4 mt-4 md:mt-0 text-center'>My Projects</h2>
            <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
                <TypeButton  onClick= {HandleChange} name='All' isSelected= {tag=='All'}>All</TypeButton>
                <TypeButton  onClick= {HandleChange} name = 'Web' isSelected= {tag=='Web'}>Web</TypeButton>
                <TypeButton  onClick= {HandleChange} name='Mobile' isSelected= {tag=='Mobile'}>Mobile</TypeButton>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">

            {
                filteredProjects.map((eachProject) => (<ProjectCard gitUrl={eachProject.gitUrl} previewUrl={eachProject.previewUrl } key={eachProject.id} ImageUrl={eachProject.image} title={eachProject.title} description={eachProject.description } />))
            }
            </div>
        </>
  )
}

export default ProjectsSection