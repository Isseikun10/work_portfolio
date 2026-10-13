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
    DiRedis,
    DiPostgresql,
    DiLinux,
} from "react-icons/di"
import {
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
    SiDotnet,
    SiGraphql,
    SiJira,
    SiSwagger,
    SiTypescript,
    SiRedux,
    SiMui,
} from "react-icons/si"
import { FaAws, FaDocker, FaGitlab } from "react-icons/fa"
import { FiCheckCircle, FiCode, FiCpu, FiGitMerge, FiRepeat, FiZap } from "react-icons/fi"
import Reveal from "./Reveal"

const skills = [
    {
        category: "Frontend",
        technologies: [
            { name: "HTML5", Icon: DiHtml5, color: "text-orange-500" },
            { name: "CSS3", Icon: DiCss3, color: "text-blue-500" },
            { name: "Sass", Icon: DiSass, color: "text-pink-500" },
            { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-400" },
            { name: "Bootstrap", Icon: DiBootstrap, color: "text-purple-500" },
            { name: "JavaScript", Icon: DiJavascript1, color: "text-yellow-400" },
            { name: "TypeScript", Icon: SiTypescript, color: "text-blue-500" },
            { name: "React.js", Icon: DiReact, color: "text-cyan-400" },
            { name: "Next.js", Icon: SiNextdotjs, color: "text-gray-100" },
            { name: "Material UI", Icon: SiMui, color: "text-blue-400" },
            { name: "Redux", Icon: SiRedux, color: "text-purple-400" },
        ],
    },
    {
        category: "Backend",
        technologies: [
            { name: "Node.js", Icon: DiNodejsSmall, color: "text-green-500" },
            { name: "Express.js", Icon: SiExpress, color: "text-gray-300" },
            { name: "C# / .NET", Icon: SiDotnet, color: "text-purple-500" },
            { name: "Python", Icon: DiPython, color: "text-sky-400" },
            { name: "PHP", Icon: DiPhp, color: "text-indigo-400" },
            { name: "Laravel", Icon: DiLaravel, color: "text-red-500" },
            { name: "Java", Icon: DiJava, color: "text-red-500" },
            { name: "REST APIs", Icon: SiSwagger, color: "text-green-400" },
            { name: "GraphQL", Icon: SiGraphql, color: "text-pink-500" },
        ],
    },
    {
        category: "Bases de Datos",
        technologies: [
            { name: "PostgreSQL", Icon: DiPostgresql, color: "text-blue-400" },
            { name: "MySQL", Icon: DiMysql, color: "text-sky-400" },
            { name: "SQL Server", Icon: DiMsqlServer, color: "text-red-500" },
            { name: "MongoDB", Icon: DiMongodb, color: "text-green-500" },
            { name: "Redis", Icon: DiRedis, color: "text-red-500" },
        ],
    },
    {
        category: "DevOps & Cloud",
        technologies: [
            { name: "AWS (EC2, S3)", Icon: FaAws, color: "text-yellow-500" },
            { name: "Docker", Icon: FaDocker, color: "text-blue-500" },
            { name: "CI/CD", Icon: FiGitMerge, color: "text-emerald-400" },
            { name: "Git / GitHub", Icon: DiGithubBadge, color: "text-gray-300" },
            { name: "GitLab", Icon: FaGitlab, color: "text-orange-500" },
            { name: "Linux / Unix", Icon: DiLinux, color: "text-yellow-400" },
        ],
    },
    {
        category: "Metodologías & Herramientas",
        technologies: [
            { name: "Scrum / Agile", Icon: FiRepeat, color: "text-blue-400" },
            { name: "Jira", Icon: SiJira, color: "text-blue-500" },
            { name: "Clean Code", Icon: FiCode, color: "text-green-400" },
            { name: "TDD", Icon: FiCheckCircle, color: "text-green-400" },
            { name: "n8n Automation", Icon: FiZap, color: "text-pink-400" },
            { name: "Integración IA/LLM", Icon: FiCpu, color: "text-purple-400" },
        ],
    },
]

const Skills = () => {
    return (
        <section className="relative mx-auto max-w-[1100px] px-6 py-16 md:py-24" id="skills">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
            />

            <Reveal>
                <div className="relative mb-12 text-center">
                    <p className="mb-3 font-mono text-sm text-cyan-400">&lt;skills /&gt;</p>
                    <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl">
                        Mis{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                            habilidades
                        </span>
                    </h2>
                    <p className="mx-auto max-w-[700px] text-base leading-7 text-gray-400 md:text-lg">
                        Ingeniero en Sistemas Computacionales con más de{" "}
                        <span className="font-semibold text-cyan-300">5 años de experiencia</span> en desarrollo
                        Fullstack. Trabajé en varios proyectos frontend y backend. Puedes revisarlos{" "}
                        <a
                            href="#portfolio"
                            className="text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 transition-colors hover:text-cyan-300 hover:decoration-cyan-300"
                        >
                            aquí
                        </a>
                        .
                    </p>
                </div>
            </Reveal>

            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                    <Reveal key={skill.category} delay={(index % 3) * 0.1}>
                        <div className="h-full rounded-2xl border border-white/10 bg-gray-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
                            <p className="mb-1 font-mono text-xs text-violet-400">
                                {String(index + 1).padStart(2, "0")}
                            </p>
                            <h3 className="mb-5 text-xl font-bold text-gray-100">{skill.category}</h3>

                            <ul className="flex flex-wrap gap-2">
                                {skill.technologies.map(({ name, Icon, color }) => (
                                    <li
                                        key={name}
                                        className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 transition-all duration-200 hover:border-cyan-400/40 hover:bg-white/[0.07]"
                                    >
                                        <Icon
                                            className={`text-xl transition-transform duration-200 group-hover:scale-110 ${color}`}
                                        />
                                        <span className="font-mono text-xs text-gray-300">{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default Skills
