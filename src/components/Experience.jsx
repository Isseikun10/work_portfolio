import React, { useState } from "react"
import Reveal from "./Reveal"

const experiences = [
    {
        company: "Digy Networks",
        start: "2026",
        end: null, // null = trabajo actual
        description:
            "Somos una empresa 100% mexicana especializada en internet por fibra óptica. Más de 15 años llevando conectividad de alta calidad por todo México para donde más se necesita: hogares, empresas e instituciones.",
    },
    {
        company: "Connectivity Solutions",
        start: "2021",
        end: "2026",
        description:
            "Con más de 10 años de experiencia y una amplia cartera de proyectos exitosos, somos su mejor opción para mantener la seguridad, continuidad e incluso visibilidad de sus conexiones a internet. Nuestro servicio de monitoreo de enlaces de red, levantamiento y seguridad está diseñado para satisfacer las necesidades de cualquier organización que dependa de redes de internet. Como expertos en el campo, ofrecemos soluciones de clase mundial, personalizadas y adaptadas a las necesidades individuales de cada cliente.",
    },
    {
        company: "Procblisher S.A.S de C.V",
        start: "2019",
        end: "2020",
        description:
            "Es una empresa de consultoría y capacitación en Project Management, Agilidad empresarial y Excelencia operativa para empresas y áreas de T.I. que desarrollan software.",
    },
    {
        company: "Creative Solutions",
        start: "2018",
        end: "2019",
        description: "",
    },
]

const ExperienceCard = ({ experience }) => {
    const [expanded, setExpanded] = useState(false)
    const { company, start, end, description } = experience
    const isCurrent = end === null
    const isLong = description.length > 220

    return (
        <div className="relative pl-8 md:pl-10">
            {/* Nodo del timeline */}
            <span
                aria-hidden="true"
                className="absolute left-0 top-7 flex h-4 w-4 -translate-x-1/2 items-center justify-center"
            >
                {isCurrent && (
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-cyan-400/60" />
                )}
                <span
                    className={`relative h-3 w-3 rounded-full border-2 ${
                        isCurrent
                            ? "border-cyan-300 bg-cyan-400"
                            : "border-gray-600 bg-gray-900"
                    }`}
                />
            </span>

            <article className="group rounded-2xl border border-white/10 bg-gray-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="rounded-md border border-white/10 bg-gray-950/70 px-2 py-1 font-mono text-xs text-cyan-300">
                        {start} → {isCurrent ? "presente" : end}
                    </span>
                    {isCurrent && (
                        <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            actual
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-semibold text-gray-100 md:text-2xl">{company}</h3>

                {description && (
                    <>
                        <p
                            className={`mt-3 text-sm leading-6 text-gray-400 md:text-base md:leading-7 ${
                                expanded ? "" : "line-clamp-4"
                            }`}
                        >
                            {description}
                        </p>
                        {isLong && (
                            <button
                                type="button"
                                onClick={() => setExpanded((v) => !v)}
                                aria-expanded={expanded}
                                className="mt-2 font-mono text-xs text-cyan-400 transition-colors hover:text-cyan-300"
                            >
                                {expanded ? "// ver menos" : "// ver más"}
                            </button>
                        )}
                    </>
                )}
            </article>
        </div>
    )
}

const Experience = () => {
    return (
        <section className="relative mx-auto max-w-[760px] px-6 py-16 md:py-24" id="experience">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
            />

            <div className="relative mb-12">
                <p className="mb-3 font-mono text-sm text-cyan-400">&lt;experience /&gt;</p>
                <h2 className="text-4xl font-bold text-white md:text-5xl">
                    Mi{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                        experiencia
                    </span>
                </h2>
            </div>

            {/* Línea vertical del timeline */}
            <div className="relative ml-2 space-y-8 border-l border-white/10">
                {experiences.map((experience) => (
                    <Reveal key={experience.company}>
                        <ExperienceCard experience={experience} />
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default Experience
