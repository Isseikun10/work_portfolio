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

const skills = [
    {
        category: "Frontend",
        technologies: [
            { name: "HTML5", Icon: DiHtml5 },
            { name: "CSS3", Icon: DiCss3 },
            { name: "Sass", Icon: DiSass },
            { name: "Tailwind CSS", Icon: SiTailwindcss },
            { name: "Bootstrap", Icon: DiBootstrap },
            { name: "JavaScript", Icon: DiJavascript1 },
            { name: "TypeScript", Icon: SiTypescript },
            { name: "React.js", Icon: DiReact },
            { name: "Next.js", Icon: SiNextdotjs },
            { name: "Material UI", Icon: SiMui },
            { name: "Redux", Icon: SiRedux },
        ],
    },
    {
        category: "Backend",
        technologies: [
            { name: "Node.js", Icon: DiNodejsSmall },
            { name: "Express.js", Icon: SiExpress },
            { name: "C# / .NET", Icon: SiDotnet },
            { name: "Python", Icon: DiPython },
            { name: "PHP", Icon: DiPhp },
            { name: "Laravel", Icon: DiLaravel },
            { name: "Java", Icon: DiJava },
            { name: "REST APIs", Icon: SiSwagger },
            { name: "GraphQL", Icon: SiGraphql },
        ],
    },
    {
        category: "Bases de Datos",
        technologies: [
            { name: "PostgreSQL", Icon: DiPostgresql },
            { name: "MySQL", Icon: DiMysql },
            { name: "SQL Server", Icon: DiMsqlServer },
            { name: "MongoDB", Icon: DiMongodb },
            { name: "Redis", Icon: DiRedis },
        ],
    },
    {
        category: "DevOps & Cloud",
        technologies: [
            { name: "AWS (EC2, S3)", Icon: FaAws },
            { name: "Docker", Icon: FaDocker },
            { name: "CI/CD", Icon: FiGitMerge },
            { name: "Git / GitHub", Icon: DiGithubBadge },
            { name: "GitLab", Icon: FaGitlab },
            { name: "Linux / Unix", Icon: DiLinux },
        ],
    },
    {
        category: "Metodologías & Herramientas",
        technologies: [
            { name: "Scrum / Agile", Icon: FiRepeat },
            { name: "Jira", Icon: SiJira },
            { name: "Clean Code", Icon: FiCode },
            { name: "TDD", Icon: FiCheckCircle },
            { name: "n8n Automation", Icon: FiZap },
            { name: "Integración IA/LLM", Icon: FiCpu },
        ],
    },
]

const Skills = () => {
    return (
        <section className="relative mx-auto max-w-[1100px] px-6 py-16 md:py-24" id="skills">
            <div className="relative mb-12">
                <p className="mb-3 font-mono text-sm text-accent">01 — Tecnologías</p>
                <h2 className="mb-5 text-4xl font-bold text-fg md:text-5xl">
                    Lenguajes, frameworks y herramientas
                </h2>
                <p className="max-w-[700px] text-base leading-7 text-muted md:text-lg">
                    Ingeniero en Sistemas Computacionales con más de{" "}
                    <span className="font-semibold text-accent">5 años de experiencia</span> en desarrollo
                    Fullstack. Trabajé en varios proyectos frontend y backend. Puedes revisarlos{" "}
                    <a
                        href="#portfolio"
                        className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-fg hover:decoration-fg"
                    >
                        aquí
                    </a>
                    .
                </p>
            </div>

            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                    <div key={skill.category} className="h-full rounded border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent">
                        <p className="mb-1 font-mono text-xs text-muted">
                            {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mb-5 text-xl font-bold text-fg">{skill.category}</h3>

                        <ul className="flex flex-wrap gap-2">
                            {skill.technologies.map(({ name, Icon }) => (
                                <li
                                    key={name}
                                    className="group flex items-center gap-2 rounded border border-line bg-surface px-3 py-2 transition-colors duration-200 hover:border-accent hover:bg-canvas"
                                >
                                    <Icon
                                        aria-hidden="true"
                                        className="text-xl text-muted"
                                    />
                                    <span className="font-mono text-xs text-fg">{name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
