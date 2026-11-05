import React, { useState } from "react"
import { AiOutlineGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"
import project1 from "../assets/Project/project1.png"
import project2 from "../assets/Project/project2.png"
import project3 from "../assets/Project/project3.png"

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
        img: project2,
        title: "Portafolio Personal (Este proyecto)",
        description:
            "Sitio web personal desarrollado con React 18, Vite, Tailwind CSS y Framer Motion para animaciones. Desplegado en Vercel con dominio personalizado. Código abierto en GitHub.",
        tech: ["React", "Vite", "Tailwind", "Framer Motion", "Vercel"],
        links: {
            site: "https://work-portfolio-ashy.vercel.app/",
            github: "https://github.com/Isseikun10/work_portfolio",
        },
    },
    {
        img: project3,
        title: "Recetario por ingredientes",
        description:
            "Aplicación web en Angular 20 desplegada en Firebase Hosting. Ingresas de 2 a 5 ingredientes y la app lista recetas que los usan, con una estimación calórica básica, el detalle con pasos y una gráfica de barras de calorías por ingrediente. Las recetas favoritas se guardan en localStorage. Desplegado en Firebase con dominio personalizado. Código abierto en GitHub.",
        tech: ["Angular", "Firebase", "TypeScript", "HTML", "CSS"],
        links: {
            site: "https://recetario-ingredientes.web.app/",
            github: "https://github.com/Isseikun10/recetario-ingredientes",
        },
    },
    // {
    //     img: project1, // Reemplaza con tu captura real
    // title: "E-commerce Full Stack (MERN)",
    //     description:
    // "Tienda en línea completa con autenticación JWT, carrito de compras, pasarela de pago con Stripe, panel de administración y gestión de inventario. Backend en Node.js + Express, base de datos MongoDB y frontend en React con Context API.",
    // tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    //     links: {
    // site: "https://tu-ecommerce.vercel.app/",
    // github: "https://github.com/Isseikun10/ecommerce-mern",
    //     },
    // },
    // {
    //     img: project1,
    // title: "Sistema de Gestión Empresarial (ERP)",
    //     description:
    // "Plataforma web para gestión de clientes, facturación, inventario y reportes. Desarrollada con Laravel 10, MySQL y Blade Templates. Incluye roles y permisos, exportación a PDF/Excel y dashboard con métricas en tiempo real.",
    // tech: ["Laravel", "PHP", "MySQL", "Blade", "Chart.js"],
    //     links: {
    // site: "https://tu-erp-demo.com/",
    // github: "https://github.com/Isseikun10/erp-laravel",
    //     },
    // },
    // {
    //     img: project1,
    // title: "API REST de Monitoreo de Red",
    //     description:
    // "API REST desarrollada en Python con FastAPI para monitorear el estado de enlaces de red, latencia, pérdida de paquetes y disponibilidad. Incluye tareas programadas con Celery, notificaciones por correo y dashboard en React.",
    // tech: ["Python", "FastAPI", "Celery", "Redis", "React"],
    //     links: {
    // site: "https://tu-monitoreo.vercel.app/",
    // github: "https://github.com/Isseikun10/network-monitor",
    //     },
    // },
    // {
    //     img: project1,
    // title: "Chatbot con IA para Atención al Cliente",
    //     description:
    // "Chatbot inteligente que responde consultas de clientes usando procesamiento de lenguaje natural. Backend en Node.js, integración con OpenAI API, base de datos PostgreSQL y frontend embeddable en cualquier sitio web.",
    // tech: ["Node.js", "OpenAI", "PostgreSQL", "React", "Socket.io"],
    //     links: {
    // site: "https://tu-chatbot.vercel.app/",
    // github: "https://github.com/Isseikun10/chatbot-ia",
    //     },
    // },
    // {
    //     img: project1,
    // title: "Dashboard Analítico de Ventas",
    //     description:
    // "Panel interactivo que consume datos de múltiples fuentes (MySQL, APIs externas) y los visualiza con gráficas dinámicas. Incluye filtros por fecha, exportación de reportes y autenticación con roles.",
    // tech: ["React", "Recharts", "Node.js", "MySQL", "JWT"],
    //     links: {
    // site: "https://tu-dashboard.vercel.app/",
    // github: "https://github.com/Isseikun10/sales-dashboard",
    //     },
    // },
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
        <article className="group flex h-full flex-col overflow-hidden rounded border border-line bg-surface transition-colors duration-300 hover:border-accent">
            {/* Ventana de navegador */}
            <a
                href={project.links.site}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir sitio de ${project.title}`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
                <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
                    <span className="flex-1 truncate rounded bg-canvas px-3 py-1 font-mono text-[11px] text-muted">
                        {getHost(project.links.site)}
                    </span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-canvas">
                    <img
                        src={project.img}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </div>
            </a>

            {/* Contenido */}
            <div className="flex flex-1 flex-col p-5">
                <p className="mb-1 font-mono text-xs text-muted">
                    project_{String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 text-lg font-semibold leading-snug text-fg md:text-xl">
                    {project.title}
                </h3>

                <p className={`text-sm leading-6 text-muted ${expanded ? "" : "line-clamp-3"}`}>
                    {project.description}
                </p>
                {isLong && (
                    <button
                        type="button"
                        onClick={() => setExpanded((v) => !v)}
                        aria-expanded={expanded}
                        className="mt-2 self-start font-mono text-xs text-accent transition-colors hover:text-fg"
                    >
                        {expanded ? "Ver menos" : "Ver más"}
                    </button>
                )}

                {/* Tecnologías */}
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
                    {project.tech.map((t) => (
                        <li
                            key={t}
                            className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-fg transition-colors hover:border-accent hover:text-fg"
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
                        className="flex flex-1 items-center justify-center gap-2 rounded bg-accent hover:bg-accent/90 px-4 py-2 font-mono text-sm font-semibold text-canvas transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                    >
                        <FiExternalLink /> Ver sitio
                    </a>
                    <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded border border-line bg-surface px-4 py-2 font-mono text-sm text-fg transition-colors duration-300 hover:border-accent hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
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
            <div className="relative mb-12">
                <p className="mb-3 font-mono text-sm text-accent">03 — Portafolio</p>
                <h2 className="text-4xl font-bold text-fg md:text-5xl">
                    Proyectos en línea, con código en GitHub
                </h2>
            </div>

            <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Portfolio
