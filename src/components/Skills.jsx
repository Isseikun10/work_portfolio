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
  DiDocker,
  DiRedis,
  DiPostgresql,
  DiLinux,
  DiNginx,
} from "react-icons/di"
import { SiNextdotjs, SiTailwindcss, SiExpress, SiCsharp, SiDotnet, SiGraphql, SiJira, SiSwagger, SiTypescript } from "react-icons/si"
import { FaAws, FaDocker } from "react-icons/fa"
import Reveal from "./Reveal"

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML5', icon: <DiHtml5 className='text-orange-600' /> },
      { name: 'CSS3', icon: <DiCss3 className='text-blue-600' /> },
      { name: 'Sass', icon: <DiSass className='text-pink-500' /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-cyan-400' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-500' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
      { name: 'TypeScript', icon: <SiTypescript className='text-blue-500' /> },
      { name: 'React.js', icon: <DiReact className='text-cyan-500' /> },
      { name: 'Next.js', icon: <SiNextdotjs className='text-gray-100' /> },
      { name: 'Material UI', icon: <DiReact className='text-blue-400' /> },
      { name: 'Redux', icon: <DiReact className='text-purple-500' /> },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', icon: <DiNodejsSmall className='text-green-500' /> },
      { name: 'Express.js', icon: <SiExpress className='text-gray-300' /> },
      { name: 'C# / .NET', icon: <SiCsharp className='text-purple-500' /> },
      { name: 'Python', icon: <DiPython className='text-blue-400' /> },
      { name: 'PHP', icon: <DiPhp className='text-indigo-500' /> },
      { name: 'Laravel', icon: <DiLaravel className='text-red-500' /> },
      { name: 'Java', icon: <DiJava className='text-red-600' /> },
      { name: 'REST APIs', icon: <SiSwagger className='text-green-400' /> },
      { name: 'GraphQL', icon: <SiGraphql className='text-pink-500' /> },
    ],
  },
  {
    category: 'Bases de Datos',
    technologies: [
      { name: 'PostgreSQL', icon: <DiPostgresql className='text-blue-500' /> },
      { name: 'MySQL', icon: <DiMysql className='text-blue-700' /> },
      { name: 'SQL Server', icon: <DiMsqlServer className='text-red-500' /> },
      { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
      { name: 'Redis', icon: <DiRedis className='text-red-600' /> },
    ],
  },
  {
    category: 'DevOps & Cloud',
    technologies: [
      { name: 'AWS (EC2, S3)', icon: <FaAws className='text-yellow-600' /> },
      { name: 'Docker', icon: <FaDocker className='text-blue-500' /> },
      { name: 'CI/CD', icon: <DiGithubBadge className='text-gray-300' /> },
      { name: 'Git / GitHub', icon: <DiGithubBadge className='text-gray-300' /> },
      { name: 'GitLab', icon: <DiGithubBadge className='text-orange-500' /> },
      { name: 'Linux / Unix', icon: <DiLinux className='text-yellow-400' /> },
    ],
  },
  {
    category: 'Metodologías & Herramientas',
    technologies: [
      { name: 'Scrum / Agile', icon: <SiJira className='text-blue-500' /> },
      { name: 'Jira', icon: <SiJira className='text-blue-500' /> },
      { name: 'Clean Code', icon: <SiSwagger className='text-green-400' /> },
      { name: 'TDD', icon: <SiSwagger className='text-green-400' /> },
      { name: 'n8n Automation', icon: <SiSwagger className='text-pink-400' /> },
      { name: 'Integración IA/LLM', icon: <SiSwagger className='text-purple-400' /> },
    ],
  },
]

const Skills = () => {
  return (
    <div className="max-w-[1100px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Habilidades</h2>
        <p className="text-center mb-10 max-w-[700px] mx-auto text-gray-300">
          Ingeniero en Sistemas Computacionales con más de <span>5 años de experiencia</span> en desarrollo Fullstack.
          Trabajé en varios proyectos frontend y backend. Puedes revisarlos <a href="#portfolio" className="underline hover:text-red-400 transition-colors">aquí</a>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          { skills.map(( skill, index ) => (
            <div
              key={ index }
              className="border border-red-600/40 p-6 rounded-lg bg-red-900/10 shadow-lg hover:shadow-xl hover:shadow-red-600/20 hover:border-red-600/70 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-center text-red-400"> { skill.category } </h3>
              <div className="grid grid-cols-2 gap-3">
                { skill.technologies.map(( tech, idx ) => (
                  <div key={ idx } className="flex items-center space-x-2 text-sm">
                    <span className="text-2xl"> { tech.icon } </span>
                    <span className="text-gray-300"> { tech.name } </span>
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