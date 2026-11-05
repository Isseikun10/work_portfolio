import React from "react"
import {
    AiOutlineGithub,
    AiOutlineGitlab,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMedium,
} from "react-icons/ai"
import {
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiLaravel,
    DiMysql,
    DiNodejsSmall,
    DiPhp,
    DiPython,
    DiReact,
} from "react-icons/di"
import { FiDownload } from "react-icons/fi"
import profilepic from "../assets/profpic.png"
import CV from "../assets/Curriculum/CV.pdf"

const SOCIALS = [
    { label: "GitHub", href: "https://github.com/Isseikun10", Icon: AiOutlineGithub },
    { label: "GitLab", href: "https://gitlab.com/EdwinCS1", Icon: AiOutlineGitlab },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/edwin-bonilla-dolores-082081196/", Icon: AiOutlineLinkedin },
    { label: "Medium", href: "https://medium.com/@isseikun", Icon: AiOutlineMedium },
    { label: "Instagram", href: "https://www.instagram.com/edwindolorez/", Icon: AiOutlineInstagram },
]

const STACK = [
    { name: "HTML5", Icon: DiHtml5 },
    { name: "CSS3", Icon: DiCss3 },
    { name: "JavaScript", Icon: DiJavascript1 },
    { name: "React", Icon: DiReact },
    { name: "Node.js", Icon: DiNodejsSmall },
    { name: "PHP", Icon: DiPhp },
    { name: "Laravel", Icon: DiLaravel },
    { name: "Python", Icon: DiPython },
    { name: "MySQL", Icon: DiMysql },
]

const TITLES = [
    "Ing. en Sistemas Computacionales",
    "Especializado en Desarrollo Full Stack",
    "Gestión de Infraestructura",
    "Desarrollador de Chatbots",
    "Soporte Técnico",
]

const Hero = () => {
    return (
        <section className="relative mx-auto mt-24 max-w-[1200px] px-6" id="home">
            <div className="grid place-items-center gap-12 md:grid-cols-2">
                {/* ───────── Texto ───────── */}
                <div className="relative z-10 w-full">
                    <h1
                        className="mb-5 font-extrabold leading-[1.05] tracking-tight text-fg"
                    >
                        <span className="block text-4xl text-fg md:text-5xl">Hola, soy</span>{" "}
                        <span className="mt-1 block text-4xl text-fg md:text-6xl">
                            Edwin Bonilla Dolores
                        </span>
                    </h1>

                    {/* Títulos profesionales, separados por · */}
                    <p className="mb-6 max-w-[640px] font-mono text-sm leading-7 text-fg md:text-base">
                        {TITLES.join(" · ")}
                    </p>

                    <p
                        className="mb-8 max-w-[520px] text-base leading-7 text-muted md:text-lg"
                    >
                        Soy un apasionado desarrollador fullstack con más de 5 años de experiencia.
                    </p>

                    {/* Acciones */}
                    <div className="flex flex-wrap items-center gap-5">
                        <a
                            href={CV}
                            download="CV.pdf"
                            className="group inline-flex items-center gap-2 rounded bg-accent hover:bg-accent/90 px-6 py-3 font-mono text-sm font-semibold text-canvas transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                        >
                            <FiDownload
                                aria-hidden="true"
                            />
                            Descargar CV
                        </a>

                        <ul className="flex gap-2" aria-label="Redes sociales">
                            {SOCIALS.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${label} (se abre en una pestaña nueva)`}
                                        title={label}
                                        className="flex h-11 w-11 items-center justify-center rounded border border-line bg-surface text-2xl text-muted transition-colors duration-300 hover:border-accent hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                                    >
                                        <Icon aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ───────── Foto ───────── */}
                <div className="relative z-10">
                    <img
                        src={profilepic}
                        alt="Foto de Edwin Bonilla Dolores"
                        decoding="async"
                        className="w-[280px] md:w-[440px]"
                    />
                </div>
            </div>

            {/* ───────── Stack ───────── */}
            <div className="relative z-10 py-20 md:py-24">
                <p aria-hidden="true" className="mb-8 font-mono text-sm text-accent">
                    Stack técnico
                </p>

                <ul
                    className="flex max-w-[900px] flex-wrap gap-3"
                    aria-label="Tecnologías"
                >
                    {STACK.map(({ name, Icon }) => (
                        <li
                            key={name}
                            className="group flex items-center gap-2 rounded border border-line bg-surface px-4 py-3 transition-colors duration-300 hover:border-accent"
                        >
                            <Icon
                                aria-hidden="true"
                                className="text-3xl text-muted md:text-4xl"
                            />
                            <span className="font-mono text-xs text-fg md:text-sm">{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Hero
