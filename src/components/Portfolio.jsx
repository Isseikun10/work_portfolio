import React from 'react';
import project1 from "../assets/Project/project1.png";
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
    {
        img: project1,
        title: "Reloj Digital",
        description: "Aplicación web que muestra un reloj digital en tiempo real con actualización cada segundo. Desarrollada con React y estilizada con Tailwind CSS, desplegada en Vercel con CI/CD automático desde GitHub.",
        tech: ["React", "Tailwind", "Vercel"],
        links: {
            site: "https://reloj-digital-theta.vercel.app/",
            github: "https://github.com/Isseikun10/reloj-digital",
        },
    },
    {
        img: project1, // Reemplaza con tu captura real
        title: "E-commerce Full Stack (MERN)",
        description: "Tienda en línea completa con autenticación JWT, carrito de compras, pasarela de pago con Stripe, panel de administración y gestión de inventario. Backend en Node.js + Express, base de datos MongoDB y frontend en React con Context API.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
        links: {
            site: "https://tu-ecommerce.vercel.app/",
            github: "https://github.com/Isseikun10/ecommerce-mern",
        },
    },
    {
        img: project1,
        title: "Sistema de Gestión Empresarial (ERP)",
        description: "Plataforma web para gestión de clientes, facturación, inventario y reportes. Desarrollada con Laravel 10, MySQL y Blade Templates. Incluye roles y permisos, exportación a PDF/Excel y dashboard con métricas en tiempo real.",
        tech: ["Laravel", "PHP", "MySQL", "Blade", "Chart.js"],
        links: {
            site: "https://tu-erp-demo.com/",
            github: "https://github.com/Isseikun10/erp-laravel",
        },
    },
    {
        img: project1,
        title: "API REST de Monitoreo de Red",
        description: "API REST desarrollada en Python con FastAPI para monitorear el estado de enlaces de red, latencia, pérdida de paquetes y disponibilidad. Incluye tareas programadas con Celery, notificaciones por correo y dashboard en React.",
        tech: ["Python", "FastAPI", "Celery", "Redis", "React"],
        links: {
            site: "https://tu-monitoreo.vercel.app/",
            github: "https://github.com/Isseikun10/network-monitor",
        },
    },
    {
        img: project1,
        title: "Chatbot con IA para Atención al Cliente",
        description: "Chatbot inteligente que responde consultas de clientes usando procesamiento de lenguaje natural. Backend en Node.js, integración con OpenAI API, base de datos PostgreSQL y frontend embeddable en cualquier sitio web.",
        tech: ["Node.js", "OpenAI", "PostgreSQL", "React", "Socket.io"],
        links: {
            site: "https://tu-chatbot.vercel.app/",
            github: "https://github.com/Isseikun10/chatbot-ia",
        },
    },
    {
        img: project1,
        title: "Dashboard Analítico de Ventas",
        description: "Panel interactivo que consume datos de múltiples fuentes (MySQL, APIs externas) y los visualiza con gráficas dinámicas. Incluye filtros por fecha, exportación de reportes y autenticación con roles.",
        tech: ["React", "Recharts", "Node.js", "MySQL", "JWT"],
        links: {
            site: "https://tu-dashboard.vercel.app/",
            github: "https://github.com/Isseikun10/sales-dashboard",
        },
    },
    {
        img: project1,
        title: "Portafolio Personal (Este proyecto)",
        description: "Sitio web personal desarrollado con React 18, Vite, Tailwind CSS y Framer Motion para animaciones. Desplegado en Vercel con dominio personalizado. Código abierto en GitHub.",
        tech: ["React", "Vite", "Tailwind", "Framer Motion", "Vercel"],
        links: {
            site: "https://tu-portafolio.vercel.app/",
            github: "https://github.com/Isseikun10/portfolio",
        },
    },
    {
        img: project1,
        title: "App Móvil de Finanzas Personales",
        description: "Aplicación móvil para registro de ingresos, gastos y presupuestos. Desarrollada con React Native, backend en Node.js y base de datos PostgreSQL. Incluye gráficas, categorías personalizables y sincronización en la nube.",
        tech: ["React Native", "Node.js", "PostgreSQL", "Expo"],
        links: {
            site: "https://tu-app-finanzas.com/",
            github: "https://github.com/Isseikun10/finanzas-app",
        },
    },
];

const Portfolio = () => {
    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portafolio</h2>
            { projects.map(( project, index ) => (
                <Reveal key={ index }>
                    <div className={ `flex flex-col md:flex-row ${ index % 2 !== 0 ? 'md:flex-row-reverse' : '' } mb-16` }>
                        <div className='w-full md:w-1/2 p-4'>
                            <img 
                                src={ project.img } 
                                alt={ project.title } 
                                className='w-full h-full object-cover rounded-lg shadow-lg border border-red-600/20 hover:border-red-600/60 transition-colors duration-300'
                            />
                        </div>
                        
                        <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                            <h3 className='text-2xl font-semibold text-gray-200 mb-3'> { project.title } </h3>
                            <p className='text-gray-300 mb-4'> { project.description } </p>

                            {/* Tags de tecnologías */}
                            <div className='flex flex-wrap gap-2 mb-4'>
                                { project.tech.map(( t, i ) => (
                                    <span 
                                        key={ i } 
                                        className='text-xs md:text-sm px-3 py-1 rounded-full bg-red-600/15 text-red-400 border border-red-600/30'
                                    >
                                        { t }
                                    </span>
                                ) ) }
                            </div>

                            <div className='flex space-x-4'>
                                <a 
                                    href={ project.links.site } 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='px-4 py-2 bg-red-600 text-gray-100 rounded-lg hover:bg-red-700 transition duration-300 font-medium flex items-center gap-2'
                                >
                                    <AiOutlineLink /> Ver Sitio
                                </a>
                                <a 
                                    href={ project.links.github } 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='px-4 py-2 bg-red-600/80 text-gray-100 rounded-lg hover:bg-red-700 transition duration-300 flex items-center gap-2'
                                >
                                    <AiOutlineGithub /> Código
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