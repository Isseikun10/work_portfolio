import React, { useState } from "react"
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi"

// Si usas Vite, puedes moverlo a .env: VITE_FORM_ENDPOINT=...
const FORM_ENDPOINT = import.meta.env?.VITE_FORM_ENDPOINT ?? "https://getform.io/f/bejrpyla"
const REQUEST_TIMEOUT_MS = 10000

const STATS = [
    { value: 15, label: "Proyectos" },
    { value: 5, label: "Años de experiencia" },
    { value: 25, label: "Clientes atendidos" },
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

const fieldClass =
    "w-full rounded border border-line bg-canvas px-4 py-3 font-mono text-sm text-fg " +
    "placeholder:text-muted outline-none transition-colors duration-200 " +
    "focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-60"

const Field = ({ id, label, children }) => (
    <div className="mb-4">
        <label htmlFor={id} className="mb-1.5 block font-mono text-xs capitalize text-muted">
            {label}
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
            <div className="relative grid items-start gap-12 md:grid-cols-2">
                {/* ───────── Columna izquierda: About ───────── */}
                <div>
                    <p className="mb-3 font-mono text-sm text-accent">05 — Perfil y contacto</p>

                    <h2 className="mb-6 text-4xl font-bold text-fg md:text-5xl">
                        Desarrollador full stack: React, Node.js y .NET
                    </h2>

                    <p className="max-w-prose leading-7 text-muted">
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
                                className="rounded border border-line bg-surface px-3 py-1 font-mono text-xs text-fg transition-colors hover:border-accent hover:text-fg"
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
                                className="rounded border border-line bg-surface p-4 transition-colors duration-300 hover:border-accent"
                            >
                                <dd className="order-1 text-2xl font-bold text-fg md:text-4xl">
                                    {value}
                                    <span className="text-accent">+</span>
                                </dd>
                                <dt className="mt-1 text-xs text-muted md:text-sm">{label}</dt>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* ───────── Columna derecha: Formulario estilo terminal ───────── */}
                <div className="overflow-hidden rounded border border-line bg-surface">
                    <form
                        onSubmit={handleSubmit}
                        onChange={handleChange}
                        className="p-6 md:p-8"
                        id="form"
                    >
                        <p className="mb-6 font-mono text-lg font-semibold text-fg">
                            Escríbeme por una vacante o proyecto
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
                                className="relative w-full overflow-hidden rounded bg-accent hover:bg-accent/90 py-3 font-mono text-base font-semibold text-canvas transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {sending ? "Enviando..." : "Enviar mensaje"}
                            </button>
                        </fieldset>

                        {/* Estado del envío */}
                        <div aria-live="polite" className="mt-4 min-h-[1.5rem] font-mono text-sm">
                            {status === "success" && (
                                <p className="flex items-start gap-2 text-ok">
                                    <FiCheckCircle aria-hidden="true" className="mt-0.5 shrink-0 text-base" />
                                    Mensaje enviado. ¡Gracias, te responderé pronto!
                                </p>
                            )}
                            {status === "error" && (
                                <p role="alert" className="flex items-start gap-2 text-red-400">
                                    <FiAlertCircle aria-hidden="true" className="mt-0.5 shrink-0 text-base" />
                                    Algo salió mal. Inténtalo de nuevo.
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
