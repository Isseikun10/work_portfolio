import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiJava,
  DiPhp,
  DiPython,
  DiMysql,
  DiMsqlServer,
  DiLaravel,
  DiAws,
} from "react-icons/di"
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'Sass', icon: <DiSass className='text-pink-600' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
      ],
    },
    {
      category: 'Fullstack',
      technologies: [
        { name: 'Java', icon: <DiJava className='text-red-600' /> },
        { name: 'PHP', icon: <DiPhp className='text-purple-500' /> },
        { name: 'Python', icon: <DiPython className='text-blue-400' /> },
        { name: 'MySQL', icon: <DiMysql className='text-blue-700' /> },
        { name: 'SQL Server', icon: <DiMsqlServer className='text-blue-700' /> },
        { name: 'Laravel', icon: <DiLaravel className='text-red-500' /> },
        { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
        { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
        { name: 'AWS', icon: <DiAws className='text-yellow-600' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
      <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-center">Habilidades</h2>
          <p className="text-center mb-8">
            Trabajé en varios proyectos frontend y fullstack. Puedes revisarlos <a href="#portfolio" className="underline">aquí</a>.
          </p>

          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            { skills.map((skill, index) => (
              <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-center"> { skill.category } </h3>
                <div className="grid grid-cols-2 gap-4">
                  { skill.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-2xl"> { tech.icon } </span>
                      <span> { tech.name } </span>
                    </div>
                  ) ) }
                </div>
              </div>
            ) ) }
          </div>
      </Reveal>
    </div>
  )
}

export default Skills