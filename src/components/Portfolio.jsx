import React from 'react';
import project1 from "../assets/Project/project1.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
        img: project1,
        title: "Reloj Digital",
        description: "Se muestra un reloj digital que muestra la hora actual y se actualiza cada segundo.",
        links: {
            site: "https://reloj-digital-theta.vercel.app/",
            github: "https://github.com/Isseikun10/reloj-digital",
        },
    },
]

const Portfolio = () => {
    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portafolio</h2>
                { projects.map((project, index) => (
                    <Reveal>
                        <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                            <div className='w-full md:w-1/2 p-4'>
                                <img src={project.img} alt={project.title} className='w-full h-full object-cover rounded-lg shadow-lg'/>
                            </div>
                            
                            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                                <h3 className='text-2xl font-semibold text-gray-200 mb-4'> { project.title } </h3>
                                <p className='text-gray-300 mb-4'> { project.description } </p>
                                <div className='flex space-x-4'>
                                    <a href={project.links.site} target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                                        Ver Sitio
                                    </a>
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                                        <AiOutlineGithub/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ) ) }
        </div>
    )
}

export default Portfolio