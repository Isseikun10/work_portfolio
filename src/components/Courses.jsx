import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { SiUdemy } from "react-icons/si"
import { FiExternalLink } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import { AnimatePresence, motion } from "framer-motion"
import course1 from "../assets/Course/course1.jpg"
import course2 from "../assets/Course/course2.png"
import course3 from "../assets/Course/course3.jpeg"
import course4 from "../assets/Course/course4.jpg"
import course5 from "../assets/Course/course5.jpg"
import course6 from "../assets/Course/course6.jpg"
import course7 from "../assets/Course/course7.jpg"
import course8 from "../assets/Course/course8.jpg"
import course9 from "../assets/Course/course9.jpg"
import course10 from "../assets/Course/course10.png"
import course11 from "../assets/Course/course11.png"
import course12 from "../assets/Course/course12.png"
import course13 from "../assets/Course/course13.png"

const CATEGORIES = ["Todos", "Académico", "Web", "Cloud y Redes", "IA y Python"]
const LONG_DESCRIPTION = 150

const cursos = [
    {
        img: course10,
        category: "Académico",
        issuer: "SEP",
        title: "Título Profesional",
        description: "Título Profesional por la carrera de Ingeniería en Sistemas Computacionales.",
        links: {
            site: course10,
            external: "https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/indexAvanzada.action",
        },
    },
    {
        img: course11,
        category: "Académico",
        issuer: "SEP",
        title: "Cédula Profesional",
        description: "Cédula Profesional por la carrera de Ingeniería en Sistemas Computacionales.",
        links: {
            site: course11,
            external: "https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/indexAvanzada.action",
        },
    },
    {
        img: course1,
        category: "Web",
        issuer: "Udemy",
        title: "React: De cero a experto (Hooks y MERN)",
        description:
            "Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, MUI, Multiple Routers.",
        links: { site: course1, external: "https://www.udemy.com/course/react-cero-experto/" },
    },
    {
        img: course2,
        category: "IA y Python",
        issuer: "Elements of AI",
        title: "Elements of AI",
        description: "Introduction to AI, Machine Learning, Neural Networks, and more.",
        links: { site: course2, external: "https://course.elementsofai.com/es/" },
    },
    {
        img: course3,
        category: "Cloud y Redes",
        issuer: "Cisco NetAcad",
        title: "CCNA R&S: Introduction to Networks",
        description:
            "The course introduces the principles and structure of IP addressing and the fundamentals of Ethernet concepts, media, and operations to provide a foundation for the curriculum.",
        links: { site: course3, external: "https://www.netacad.com/" },
    },
    {
        img: course4,
        category: "Web",
        issuer: "Udemy",
        title: "CSS & JavaScript - Certification Course for Beginners",
        description: "Learn how to Add Dynamic Client-Side Functions to your Web Pages using CSS & JavaScript.",
        links: {
            site: course4,
            external: "https://www.udemy.com/course/css-javascript-certification-course-for-beginners/",
        },
    },
    {
        img: course5,
        category: "Web",
        issuer: "Udemy",
        title: "React Responsive Portfolio Website - Complete React Project",
        description:
            "Build React Portfolio Website, React Context API, Send E-mail from React App, React Hooks, React Packages, React theme.",
        links: {
            site: course5,
            external: "https://www.udemy.com/course/react-responsive-portfolio-website-complete-react-project/",
        },
    },
    {
        img: course6,
        category: "Web",
        issuer: "Udemy",
        title: "Maestría en JavaScript: Desde Principiante Hasta Experto",
        description: "Aprende el Lenguaje de Programación Web más usado paso a paso.",
        links: {
            site: course6,
            // TODO: este enlace es idéntico al del curso de React Portfolio; reemplázalo por el del curso de JavaScript
            external: "https://www.udemy.com/course/react-responsive-portfolio-website-complete-react-project/",
        },
    },
    {
        img: course7,
        category: "Web",
        issuer: "Udemy",
        title: "Git and GitHub Bootcamp for Beginners",
        description:
            "Learn the basis essentials of Git and GitHub & get a head start with the most popular Version Control System.",
        links: { site: course7, external: "https://www.udemy.com/course/draft/4161352/" },
    },
    {
        img: course8,
        category: "Web",
        issuer: "Udemy",
        title: "TailwindCSS from A to Z: Master TailwindCSS Quickly",
        description:
            "Get started with Tailwind, a utility-first CSS framework, and master its directives, modules, and code reusability.",
        links: { site: course8, external: "https://www.udemy.com/course/learn-tailwind-css-quickly/" },
    },
    {
        img: course9,
        category: "Cloud y Redes",
        issuer: "Udemy",
        title: "Amazon Elastic Compute Cloud (EC2) Beginners Certification",
        description:
            "Learn to Setup, Configure, and Administer EC2 Instances on AWS. Explore Virtualization, Scaling, Elastic IPs, + More.",
        links: {
            site: course9,
            external: "https://www.udemy.com/course/amazon-elastic-compute-cloud-ec2-beginners/",
        },
    },
    {
        img: course12,
        category: "IA y Python",
        issuer: "Cisco · Credly",
        title: "Python Essentials 1",
        description:
            "Cisco, in collaboration with OpenEDG Python Institute, verifies the earner of this badge successfully completed the Python Essentials 1 course and achieved the student level credentials. Earners have knowledge of the concepts of computer programming, the syntax and semantics of the Python language as well as demonstrate the ability to accomplish coding tasks related to the essentials of programming in the Python language and resolve implementation challenges using the Python Standard Library.",
        links: {
            site: course12,
            external: "https://www.credly.com/badges/9ed606d4-d327-4a50-b06b-7793a6c99d28/public_url",
        },
    },
    {
        img: course13,
        category: "IA y Python",
        issuer: "Cisco · Credly",
        title: "Python Essentials 2",
        description:
            "Cisco, in collaboration with OpenEDG Python Institute, verifies the earner of this badge successfully completed the Python Essentials 2 course and achieved the student level credentials. Earners have knowledge and skills in intermediate aspects of Python programming, including modules, packages, exceptions, file processing, as well as general coding techniques and object-oriented programming (OOP), and prepares the learner for the PCAP – Certified Associate in Python Programming certification.",
        links: {
            site: course13,
            external: "https://www.credly.com/badges/3d1330c4-05d9-4e9e-b209-a9ea829afa71/public_url",
        },
    },
]

const isUdemy = (url) => url.includes("udemy.com")

// Conteo por categoría, calculado una sola vez (los datos son estáticos)
const COUNTS = cursos.reduce(
    (acc, c) => ({ ...acc, [c.category]: (acc[c.category] ?? 0) + 1 }),
    { Todos: cursos.length }
)

/* ───────── Tarjeta ───────── */
const CourseCard = ({ course, index, onOpen }) => {
    const [expanded, setExpanded] = useState(false)
    const isLong = course.description.length > LONG_DESCRIPTION
    const descId = `course-desc-${index}`

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded border border-line bg-surface transition-colors duration-300 hover:border-accent">
            {/* Imagen */}
            <button
                type="button"
                onClick={(e) => onOpen(course, e.currentTarget)}
                aria-label={`Ver certificado: ${course.title}`}
                className="relative block aspect-[16/10] overflow-hidden bg-canvas focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
                {/* alt vacío: el botón ya tiene aria-label, así no se lee dos veces */}
                <img
                    src={course.img}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded border border-line bg-canvas px-2 py-1 font-mono text-[11px] text-accent">
                    {String(index + 1).padStart(2, "0")} / {course.category}
                </span>
            </button>

            {/* Contenido */}
            <div className="flex flex-1 flex-col p-5">
                <p className="mb-1 font-mono text-xs text-muted">{course.issuer}</p>
                <h3 className="mb-3 text-lg font-semibold leading-snug text-fg">{course.title}</h3>

                <p
                    id={descId}
                    className={`text-sm leading-6 text-muted ${expanded ? "" : "line-clamp-3"}`}
                >
                    {course.description}
                </p>
                {isLong && (
                    <button
                        type="button"
                        onClick={() => setExpanded((v) => !v)}
                        aria-expanded={expanded}
                        aria-controls={descId}
                        className="mt-2 self-start rounded font-mono text-xs text-accent transition-colors hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                    >
                        {expanded ? "Ver menos" : "Ver más"}
                    </button>
                )}

                {/* Acciones */}
                <div className="mt-auto flex gap-3 pt-5">
                    <button
                        type="button"
                        onClick={(e) => onOpen(course, e.currentTarget)}
                        className="flex-1 rounded bg-accent hover:bg-accent/90 px-4 py-2 font-mono text-sm font-semibold text-canvas transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                    >
                        Ver certificado
                    </button>

                    <a
                        href={course.links.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir enlace externo de ${course.title} (se abre en una pestaña nueva)`}
                        className="flex items-center justify-center rounded border border-line bg-surface px-3 text-fg transition-colors hover:border-accent hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                    >
                        {isUdemy(course.links.external) ? <SiUdemy size={18} /> : <FiExternalLink size={18} />}
                    </a>
                </div>
            </div>
        </article>
    )
}

/* ───────── Sección ───────── */
const Courses = () => {
    const [selected, setSelected] = useState(null)
    const [filter, setFilter] = useState("Todos")
    const closeRef = useRef(null)
    const triggerRef = useRef(null) // elemento que abrió el modal, para devolverle el foco

    const visible = useMemo(
        () => (filter === "Todos" ? cursos : cursos.filter((c) => c.category === filter)),
        [filter]
    )

    const openCertificate = useCallback((course, trigger) => {
        triggerRef.current = trigger
        setSelected(course)
    }, [])

    const closeCertificate = useCallback(() => setSelected(null), [])

    // Esc para cerrar, bloqueo de scroll, foco al botón de cerrar y foco de vuelta al salir
    useEffect(() => {
        if (!selected) return

        const onKey = (e) => e.key === "Escape" && closeCertificate()
        document.addEventListener("keydown", onKey)

        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        closeRef.current?.focus()

        return () => {
            document.removeEventListener("keydown", onKey)
            document.body.style.overflow = prevOverflow
            triggerRef.current?.focus?.()
        }
    }, [selected, closeCertificate])

    return (
        <section className="relative mx-auto max-w-[1100px] px-6 py-16 md:py-24" id="courses">
            {/* Encabezado */}
            <div className="relative mb-10">
                <p className="mb-3 font-mono text-sm text-accent">04 — Credenciales</p>
                <h2 className="text-4xl font-bold text-fg md:text-5xl">
                    Formación académica y certificados técnicos
                </h2>
            </div>

            {/* Filtros (botones con aria-pressed: no hay paneles, así que no son "tabs") */}
            <div className="relative mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
                {CATEGORIES.map((cat) => {
                    const active = filter === cat
                    return (
                        <button
                            key={cat}
                            type="button"
                            aria-pressed={active}
                            onClick={() => setFilter(cat)}
                            className={`rounded border px-3 py-1.5 font-mono text-xs transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                                active
                                    ? "border-accent bg-surface text-accent"
                                    : "border-line bg-surface text-muted hover:border-muted hover:text-fg"
                            }`}
                        >
                            {cat} <span className="opacity-60">({COUNTS[cat] ?? 0})</span>
                        </button>
                    )
                })}
            </div>

            {/* Anuncia a lectores de pantalla cuántos resultados hay tras filtrar */}
            <p className="sr-only" aria-live="polite">
                {visible.length} certificados mostrados
            </p>

            {/* Grid */}
            <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((course, i) => (
                    <CourseCard key={course.title} course={course} index={i} onOpen={openCertificate} />
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        key="certificate-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Certificado: ${selected.title}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center bg-canvas/90 p-4"
                        onClick={closeCertificate}
                    >
                        <div
                            className="relative max-h-full w-full max-w-4xl overflow-hidden rounded border border-line bg-surface"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Barra tipo ventana */}
                            <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
                                <span className="truncate font-mono text-xs text-muted">
                                    {selected.title}.png
                                </span>
                                <span className="ml-auto hidden font-mono text-xs text-muted sm:block">
                                    esc para cerrar
                                </span>

                                {/* Botón de cerrar visible en móvil */}
                                <button
                                    ref={closeRef}
                                    type="button"
                                    onClick={closeCertificate}
                                    aria-label="Cerrar certificado"
                                    className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded border border-line bg-surface text-fg transition-colors hover:border-accent hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:ml-2"
                                >
                                    <AiOutlineClose size={18} />
                                </button>
                            </div>

                            <img
                                src={selected.links.site}
                                alt={`Certificado: ${selected.title}`}
                                className="max-h-[75dvh] w-full object-contain"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Courses
