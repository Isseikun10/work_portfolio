import React, { useEffect, useRef, useState } from "react"
import { animate, useInView, useReducedMotion } from "framer-motion"
import Reveal from "./Reveal"

// Si usas Vite, puedes moverlo a .env: VITE_FORM_ENDPOINT=...
const FORM_ENDPOINT = import.meta.env?.VITE_FORM_ENDPOINT ?? "https://getform.io/f/bejrpyla"
const REQUEST_TIMEOUT_MS = 10000

const STATS = [
    { value: 15, label: "Proyectos" },
    { value: 5, label: "Años de experiencia" },
    { value: 25, label: "Clientes felices" },
]

const STACK = ["React", "Node.js", ".NET", "Laravel", "Tailwind", "AWS"]

const FIELDS = [
    { id: "name", label: "nombre", type: "text", placeholder: "Tu nombre", autoComplete: "name" },
    { id: "email", label: "correo", type: "email", placeholder: "tu@correo.com", autoComplete: "email" },
    {
        id: "message",
        label: "mensaje",
        as: "textarea",
        rows: 4,
        placeholder: "Cuéntame sobre tu proyecto...",
    },
]

/* Contador animado que arranca al entrar en pantalla */
const Counter = ({ value }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })
    const prefersReducedMotion = useReducedMotion()

    useEffect(() => {
        if (!inView || !ref.current) return

        // Respeta "reducir movimiento": muestra el valor final sin animar
        if (prefersReducedMotion) {
            ref.current.textContent = value
            return
        }

        const controls = animate(0, value, {
            duration: 1.6,
            ease: "easeOut",
            onUpdate: (v) => {
                if (ref.current) ref.current.textContent = Math.round(v)
            },
        })
        return () => controls.stop()
    }, [inView, value, prefersReducedMotion])

    return <span ref={ref}>0</span>
}

const fieldClass =
    "w-full rounded-lg border border-white/10 bg-gray-950/60 px-4 py-3 font-mono text-sm text-gray-100 " +
    "placeholder-gray-600 outline-none transition-all duration-200 " +
    "focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-400/10 disabled:opacity-60"

const Field = ({ id, label, children }) => (
    <div className="mb-4">
        <label htmlFor={id} className="mb-1.5 block font-mono text-xs text-cyan-400/80">
            <span className="text-violet-400">const</span> {label} <span className="text-gray-500">=</span>
        </label>
        {children}
    </div>
)

const Contact = () => {
    const [status, setStatus] = useState("idle") // idle | sending | success | error
    const sending = status === "sending"

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (sending) return // evita envíos dobles

        const form = e.currentTarget
        const data = new FormData(form)

        // Honeypot: si un bot lo llenó, simulamos éxito sin enviar nada
        if (data.get("_gotcha")) {
            form.reset()
            setStatus("success")
            return
        }

        setStatus("sending")

        // Timeout para no dejar el botón "Enviando..." para siempre
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
                signal: controller.signal,
            })
            if (!res.ok) throw new Error(`Request failed: ${res.status}`)
            form.reset()
            setStatus("success")
        } catch {
            setStatus("error")
        } finally {
            clearTimeout(timeout)
        }
    }

    // Al volver a escribir, se limpia el mensaje de éxito/error anterior
    const handleChange = () => {
        if (status === "success" || status === "error") setStatus("idle")
    }

    return (
        <section className="relative mx-auto max-w-[1100px] px-6 py-16 md:py-24" id="contact">
            {/* Glow decorativo de fondo */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
            />

            <Reveal>
                <div className="relative grid items-start gap-12 md:grid-cols-2">
                    {/* ───────── Columna izquierda: About ───────── */}
                    <div>
                        <p className="mb-3 font-mono text-sm text-cyan-400">&lt;about /&gt;</p>

                        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                            Desarrollador full stack: React, Node.js y .NET
                        </h2>

                        <p className="max-w-prose leading-7 text-gray-400">
                            Desarrollador de software con sólida experiencia en la creación de soluciones
                            informáticas a medida. Mis habilidades en programación orientada a objetos e
                            ingeniería de software me permiten transformar las necesidades del negocio en
                            productos eficientes y escalables.
                        </p>

                        {/* Stack */}
                        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías">
                            {STACK.map((tech) => (
                                <li
                                    key={tech}
                                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-gray-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>

                        {/* Stats */}
                        <dl className="mt-10 grid grid-cols-3 gap-4">
                            {STATS.map(({ value, label }) => (
                                <div
                                    key={label}
                                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
                                >
                                    <dd className="order-1 text-2xl font-bold text-white md:text-4xl">
                                        <Counter value={value} />
                                        <span className="text-cyan-400">+</span>
                                    </dd>
                                    <dt className="mt-1 text-xs text-gray-400 md:text-sm">{label}</dt>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* ───────── Columna derecha: Formulario estilo terminal ───────── */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 shadow-2xl shadow-black/40 backdrop-blur-xl">
                        {/* Barra de ventana */}
                        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-red-500/80" />
                            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-yellow-500/80" />
                            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-green-500/80" />
                            <span className="ml-3 font-mono text-xs text-gray-500">contact.sh</span>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            onChange={handleChange}
                            className="p-6 md:p-8"
                            id="form"
                        >
                            <p className="mb-6 font-mono text-lg font-semibold text-gray-100">
                                <span className="text-cyan-400">$</span> Escríbeme por una vacante o proyecto
                                <span
                                    aria-hidden="true"
                                    className="ml-1 inline-block h-5 w-2 translate-y-1 animate-pulse bg-cyan-400"
                                />
                            </p>

                            {/* Honeypot anti-spam: invisible para personas */}
                            <input
                                type="checkbox"
                                name="_gotcha"
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                                className="hidden"
                            />

                            <fieldset disabled={sending} className="contents">
                                {FIELDS.map(({ id, label, as, ...props }) => {
                                    const Tag = as ?? "input"
                                    return (
                                        <Field key={id} id={id} label={label}>
                                            <Tag
                                                id={id}
                                                name={id}
                                                required
                                                className={`${fieldClass} ${as === "textarea" ? "resize-none" : ""}`}
                                                {...props}
                                            />
                                        </Field>
                                    )
                                })}

                                <button
                                    type="submit"
                                    className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 py-3 font-mono text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {sending ? "Enviando..." : "Enviar mensaje →"}
                                </button>
                            </fieldset>

                            {/* Estado del envío */}
                            <div aria-live="polite" className="mt-4 min-h-[1.5rem] font-mono text-sm">
                                {status === "success" && (
                                    <p className="text-emerald-400">
                                        ✓ Mensaje enviado. ¡Gracias, te responderé pronto!
                                    </p>
                                )}
                                {status === "error" && (
                                    <p role="alert" className="text-red-400">
                                        ✗ Algo salió mal. Inténtalo de nuevo.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default Contact