import React from "react"
import { motion, MotionConfig, useReducedMotion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
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
import ShinyEffect from "./ShinyEffect"
import CV from "../assets/Curriculum/CV.pdf"

const SOCIALS = [
    { label: "GitHub", href: "https://github.com/Isseikun10", Icon: AiOutlineGithub },
    { label: "GitLab", href: "https://gitlab.com/EdwinCS1", Icon: AiOutlineGitlab },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/edwin-bonilla-dolores-082081196/", Icon: AiOutlineLinkedin },
    { label: "Medium", href: "https://medium.com/@isseikun", Icon: AiOutlineMedium },
    { label: "Instagram", href: "https://www.instagram.com/edwindolorez/", Icon: AiOutlineInstagram },
]

const STACK = [
    { name: "HTML5", Icon: DiHtml5, color: "text-orange-500" },
    { name: "CSS3", Icon: DiCss3, color: "text-blue-500" },
    { name: "JavaScript", Icon: DiJavascript1, color: "text-yellow-400" },
    { name: "React", Icon: DiReact, color: "text-cyan-400" },
    { name: "Node.js", Icon: DiNodejsSmall, color: "text-green-500" },
    { name: "PHP", Icon: DiPhp, color: "text-indigo-400" },
    { name: "Laravel", Icon: DiLaravel, color: "text-red-500" },
    { name: "Python", Icon: DiPython, color: "text-sky-400" },
    { name: "MySQL", Icon: DiMysql, color: "text-blue-400" },
]

const TITLES = [
    "Ing. en Sistemas Computacionales",
    "Especializado en Desarrollo Full Stack",
    "Gestión de Infraestructura",
    "Desarrollador de Chatbots",
    "Soporte Técnico",
]

// Secuencia estable (fuera del componente): [texto, pausa, texto, pausa, ...]
const TYPING_SEQUENCE = TITLES.flatMap((title) => [title, 1200])

// Contenido que ya está visible al cargar: anima al montar
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
})

const Hero = () => {
    const prefersReducedMotion = useReducedMotion()

    return (
        // reducedMotion="user": si el sistema pide menos movimiento, se omiten las animaciones de transformación
        <MotionConfig reducedMotion="user">
            <section className="relative mx-auto mt-24 max-w-[1200px] px-6" id="home">
                <div className="grid place-items-center gap-12 md:grid-cols-2">
                    {/* ───────── Texto ───────── */}
                    <div className="relative z-10 w-full">
                        <motion.p
                            {...fadeUp(0)}
                            className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-cyan-300 backdrop-blur md:text-sm"
                        >
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-full bg-cyan-400 motion-safe:animate-pulse"
                            />
                            &lt;developer /&gt;
                        </motion.p>

                        <motion.h1
                            {...fadeUp(0.15)}
                            className="mb-5 font-extrabold leading-[1.05] tracking-tight text-white"
                        >
                            <span className="block text-4xl text-gray-300 md:text-5xl">Hola, soy</span>{" "}
                            <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-4xl text-transparent md:text-6xl">
                                Edwin Bonilla Dolores
                            </span>
                        </motion.h1>

                        {/* Línea de terminal con typing.
                            min-h más alto en móvil: los textos largos hacen salto de línea y movían el layout. */}
                        <motion.div
                            {...fadeUp(0.3)}
                            className="mb-6 min-h-[3.5rem] font-mono text-base text-gray-300 md:min-h-[2.5rem] md:text-xl"
                        >
                            <span aria-hidden="true" className="mr-2 text-cyan-400">
                                &gt;
                            </span>
                            {/* Lectores de pantalla: texto completo, sin esperar la animación */}
                            <span className="sr-only">{TITLES.join(", ")}</span>
                            <span aria-hidden="true">
                                {prefersReducedMotion ? (
                                    TITLES[0]
                                ) : (
                                    <TypeAnimation
                                        sequence={TYPING_SEQUENCE}
                                        speed={50}
                                        repeat={Infinity}
                                        cursor
                                    />
                                )}
                            </span>
                        </motion.div>

                        <motion.p
                            {...fadeUp(0.45)}
                            className="mb-8 max-w-[520px] text-base leading-7 text-gray-400 md:text-lg"
                        >
                            Soy un apasionado desarrollador fullstack con más de 5 años de experiencia.
                        </motion.p>

                        {/* Acciones */}
                        <motion.div {...fadeUp(0.6)} className="flex flex-wrap items-center gap-5">
                            <a
                                href={CV}
                                download="CV.pdf"
                                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-mono text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40 active:scale-[0.98]"
                            >
                                <FiDownload
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-y-0.5"
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
                                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl text-gray-400 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40"
                                        >
                                            <Icon aria-hidden="true" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* ───────── Foto ───────── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-10"
                    >
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 scale-90 rounded-full bg-gradient-to-tr from-cyan-500/30 to-violet-600/30 blur-3xl"
                        />
                        <img
                            src={profilepic}
                            alt="Foto de Edwin Bonilla Dolores"
                            decoding="async"
                            className="w-[280px] drop-shadow-2xl md:w-[440px]"
                        />
                    </motion.div>
                </div>

                {/* ───────── Stack (está más abajo: anima al entrar en pantalla) ───────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 py-20 md:py-24"
                >
                    <p aria-hidden="true" className="mb-8 text-center font-mono text-sm text-cyan-400">
                        <span className="text-violet-400">const</span> stack{" "}
                        <span className="text-gray-500">=</span> [ ]
                    </p>

                    <ul
                        className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-3"
                        aria-label="Tecnologías"
                    >
                        {STACK.map(({ name, Icon, color }) => (
                            <li
                                key={name}
                                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
                            >
                                <Icon
                                    aria-hidden="true"
                                    className={`text-3xl transition-transform duration-300 group-hover:scale-110 md:text-4xl ${color}`}
                                />
                                <span className="font-mono text-xs text-gray-300 md:text-sm">{name}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
                    <ShinyEffect left={0} top={0} size={1400} />
                </div>
            </section>
        </MotionConfig>
    )
}

export default Hero