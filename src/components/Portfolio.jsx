import React, { useState } from "react"
import { AiOutlineGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"
import project1 from "../assets/Project/project1.png"
import Reveal from "./Reveal"

const projects = [
    {
        img: project1,
        title: "Reloj Digital",
        description:
            "Aplicación web que muestra un reloj digital en tiempo real con actualización cada segundo. Desarrollada con React y estilizada con Tailwind CSS, desplegada en Vercel con CI/CD automático desde GitHub.",
        tech: ["React", "Tailwind", "Vercel"],
        links: {
            site: "https://reloj-digital-theta.vercel.app/",
            github: "https://github.com/Isseikun10/reloj-digital",
        },
    },
    {
        img: project1, // Reemplaza con tu captura real
        title: "E-commerce Full Stack (MERN)",
        description:
            "Tienda en línea completa con autenticación JWT, carrito de compras, pasarela de pago con Stripe, panel de administración y gestión de inventario. Backend en Node.js + Express, base de datos MongoDB y frontend en React con Context API.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
        links: {
            site: "https://tu-ecommerce.vercel.app/",
            github: "https://github.com/Isseikun10/ecommerce-mern",
        },
    },
    {
        img: project1,
        title: "Sistema de Gestión Empresarial (ERP)",
        description:
            "Plataforma web para gestión de clientes, facturación, inventario y reportes. Desarrollada con Laravel 10, MySQL y Blade Templates. Incluye roles y permisos, exportación a PDF/Excel y dashboard con métricas en tiempo real.",
        tech: ["Laravel", "PHP", "MySQL", "Blade", "Chart.js"],
        links: {
            site: "https://tu-erp-demo.com/",
            github: "https://github.com/Isseikun10/erp-laravel",
        },
    },
    {
        img: project1,
        title: "API REST de Monitoreo de Red",
        description:
            "API REST desarrollada en Python con FastAPI para monitorear el estado de enlaces de red, latencia, pérdida de paquetes y disponibilidad. Incluye tareas programadas con Celery, notificaciones por correo y dashboard en React.",
        tech: ["Python", "FastAPI", "Celery", "Redis", "React"],
        links: {
            site: "https://tu-monitoreo.vercel.app/",
            github: "https://github.com/Isseikun10/network-monitor",
        },
    },
    {
        img: project1,
        title: "Chatbot con IA para Atención al Cliente",
        description:
            "Chatbot inteligente que responde consultas de clientes usando procesamiento de lenguaje natural. Backend en Node.js, integración con OpenAI API, base de datos PostgreSQL y frontend embeddable en cualquier sitio web.",
        tech: ["Node.js", "OpenAI", "PostgreSQL", "React", "Socket.io"],
        links: {
            site: "https://tu-chatbot.vercel.app/",
            github: "https://github.com/Isseikun10/chatbot-ia",
        },
    },
    {
        img: project1,
        title: "Dashboard Analítico de Ventas",
        description:
            "Panel interactivo que consume datos de múltiples fuentes (MySQL, APIs externas) y los visualiza con gráficas dinámicas. Incluye filtros por fecha, exportación de reportes y autenticación con roles.",
        tech: ["React", "Recharts", "Node.js", "MySQL", "JWT"],
        links: {
            site: "https://tu-dashboard.vercel.app/",
            github: "https://github.com/Isseikun10/sales-dashboard",
        },
    },
    {
        img: project1,
        title: "Portafolio Personal (Este proyecto)",
        description:
            "Sitio web personal desarrollado con React 18, Vite, Tailwind CSS y Framer Motion para animaciones. Desplegado en Vercel con dominio personalizado. Código abierto en GitHub.",
        tech: ["React", "Vite", "Tailwind", "Framer Motion", "Vercel"],
        links: {
            site: "https://tu-portafolio.vercel.app/",
            github: "https://github.com/Isseikun10/portfolio",
        },
    },
    {
        img: project1,
        title: "App Móvil de Finanzas Personales",
        description:
            "Aplicación móvil para registro de ingresos, gastos y presupuestos. Desarrollada con React Native, backend en Node.js y base de datos PostgreSQL. Incluye gráficas, categorías personalizables y sincronización en la nube.",
        tech: ["React Native", "Node.js", "PostgreSQL", "Expo"],
        links: {
            site: "https://tu-app-finanzas.com/",
            github: "https://github.com/Isseikun10/finanzas-app",
        },
    },
]

const getHost = (url) => {
    try {
        return new URL(url).host
    } catch {
        return url
    }
}

const ProjectCard = ({ project, index }) => {
    const [expanded, setExpanded] = useState(false)
    const isLong = project.description.length > 150

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
            {/* Ventana de navegador */}
            <a
                href={project.links.site}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir sitio de ${project.title}`}
                className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40"
            >
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 flex-1 truncate rounded-md bg-gray-950/70 px-3 py-1 font-mono text-[11px] text-gray-500">
                        {getHost(project.links.site)}
                    </span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-gray-950">
                    <img
                        src={project.img}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
            </a>

            {/* Contenido */}
            <div className="flex flex-1 flex-col p-5">
                <p className="mb-1 font-mono text-xs text-violet-400">
                    project_{String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 text-lg font-semibold leading-snug text-gray-100 md:text-xl">
                    {project.title}
                </h3>

                <p className={`text-sm leading-6 text-gray-400 ${expanded ? "" : "line-clamp-3"}`}>
                    {project.description}
                </p>
                {isLong && (
                    <button
                        type="button"
                        onClick={() => setExpanded((v) => !v)}
                        aria-expanded={expanded}
                        className="mt-2 self-start font-mono text-xs text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                        {expanded ? "// ver menos" : "// ver más"}
                    </button>
                )}

                {/* Tecnologías */}
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
                    {project.tech.map((t) => (
                        <li
                            key={t}
                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-gray-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                        >
                            {t}
                        </li>
                    ))}
                </ul>

                {/* Acciones */}
                <div className="mt-auto flex gap-3 pt-5">
                    <a
                        href={project.links.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-2 font-mono text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40 active:scale-[0.98]"
                    >
                        <FiExternalLink /> Ver sitio
                    </a>
                    <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-mono text-sm text-gray-300 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40"
                    >
                        <AiOutlineGithub size={18} /> Código
                    </a>
                </div>
            </div>
        </article>
    )
}

const Portfolio = () => {
    return (
        <section className="relative mx-auto max-w-[1100px] px-6 py-16 md:py-24" id="portfolio">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
            />

            <div className="relative mb-12">
                <p className="mb-3 font-mono text-sm text-cyan-400">&lt;portfolio /&gt;</p>
                <h2 className="text-4xl font-bold text-white md:text-5xl">
                    Mi{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                        portafolio
                    </span>
                </h2>
            </div>

            <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <Reveal key={project.title}>
                        <ProjectCard project={project} index={index} />
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
