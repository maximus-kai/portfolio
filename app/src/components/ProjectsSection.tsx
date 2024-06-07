import React from 'react'
import ProjectCard from './ProjectCard'

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
    return (
        <>
            <h2 className='text-4xl  font-bold text-white mb-4 mt-4 md:mt-0 text-center'>My Projects</h2>
            <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
                <button className='rounded-full border-2 border-purple-500 px-6 py-1 cursor-pointer text-xl'>All</button>
                <button className='rounded-full border-2 border-slate-600 px-6 hover:border-white py-1 cursor-pointer text-xl'>Mobile</button>
                
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">

            {
                projectsData.map((eachProject) => (<ProjectCard gitUrl={eachProject.gitUrl} previewUrl={eachProject.previewUrl } key={eachProject.id} ImageUrl={eachProject.image} title={eachProject.title} description={eachProject.description } />))
            }
            </div>
        </>
  )
}

export default ProjectsSection