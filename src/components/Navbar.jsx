import React, { useCallback, useEffect, useRef, useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link, animateScroll } from "react-scroll"
import { AnimatePresence, motion } from "framer-motion"

// "to" debe coincidir con el id de cada sección
const LINKS = [
    { to: "skills", label: "Acerca de" },
    { to: "experience", label: "Experiencia" },
    { to: "portfolio", label: "Portafolio" },
    { to: "courses", label: "Cursos y Certificados" },
    { to: "contact", label: "Contacto" },
]

const scrollProps = { smooth: true, offset: -80, duration: 500, spy: true }

const FOCUSABLE = "a[href], button:not([disabled])"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const menuRef = useRef(null)
    const openBtnRef = useRef(null)
    const closeBtnRef = useRef(null)

    const closeNav = useCallback(() => {
        setOpen(false)
        // Devuelve el foco al botón que abrió el menú
        openBtnRef.current?.focus({ preventScroll: true })
    }, [])

    const goTop = (e) => {
        e.preventDefault()
        animateScroll.scrollToTop({ smooth: true, duration: 500 })
    }

    // Estilo más sólido al hacer scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Menú abierto: Esc, trampa de foco, foco inicial y bloqueo de scroll
    useEffect(() => {
        if (!open) return

        const onKey = (e) => {
            if (e.key === "Escape") return closeNav()
            if (e.key !== "Tab" || !menuRef.current) return

            const items = menuRef.current.querySelectorAll(FOCUSABLE)
            if (!items.length) return
            const first = items[0]
            const last = items[items.length - 1]

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault()
                last.focus()
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault()
                first.focus()
            }
        }

        document.addEventListener("keydown", onKey)
        closeBtnRef.current?.focus({ preventScroll: true })

        const prev = document.body.style.overflow
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", onKey)
            document.body.style.overflow = prev
        }
    }, [open, closeNav])

    // Si se agranda la ventana con el menú abierto, ciérralo (y libera el scroll)
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)")
        const onChange = (e) => e.matches && setOpen(false)
        mq.addEventListener("change", onChange)
        return () => mq.removeEventListener("change", onChange)
    }, [])

    return (
        <>
            <header
                className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${
                    scrolled
                        ? "border-white/10 bg-gray-950/80 shadow-lg shadow-black/20"
                        : "border-transparent bg-gray-950/30"
                }`}
            >
                <nav
                    aria-label="Principal"
                    className="mx-auto flex h-16 max-w-[1300px] items-center justify-between px-6 md:h-20 md:px-12"
                >
                    {/* Marca */}
                    <a
                        href="#home"
                        onClick={goTop}
                        className="group flex items-center gap-2 rounded-md font-semibold text-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40"
                    >
                        <span className="font-mono text-cyan-400 transition-transform duration-300 group-hover:-translate-x-0.5">
                            &lt;
                        </span>
                        <span className="text-base md:text-lg">
                            Edwin Bonilla<span className="hidden sm:inline"> Dolores</span>
                        </span>
                        <span className="font-mono text-violet-400 transition-transform duration-300 group-hover:translate-x-0.5">
                            /&gt;
                        </span>
                    </a>

                    {/* Links desktop */}
                    <ul className="hidden items-center gap-1 md:flex">
                        {LINKS.map(({ to, label }) => (
                            <li key={to}>
                                <Link
                                    to={to}
                                    href={`#${to}`}
                                    {...scrollProps}
                                    activeClass="text-cyan-300! bg-cyan-400/10! border-cyan-400/30!"
                                    className="cursor-pointer rounded-lg border border-transparent px-3 py-2 font-mono text-sm text-gray-400 transition-all duration-200 hover:bg-white/5 hover:text-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Botón hamburguesa (solo abre; el cierre vive dentro del menú) */}
                    <button
                        ref={openBtnRef}
                        type="button"
                        onClick={() => setOpen(true)}
                        aria-label="Abrir menú"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40 md:hidden"
                    >
                        <AiOutlineMenu size={22} />
                    </button>
                </nav>
            </header>

            {/* Menú móvil: fuera del header para que `fixed` use toda la pantalla */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={menuRef}
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menú de navegación"
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ type: "spring", stiffness: 260, damping: 28 }}
                        className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-gray-950/95 backdrop-blur-2xl md:hidden"
                    >
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
                        />

                        {/* Barra superior con marca y botón de cerrar */}
                        <div className="relative flex h-16 items-center justify-between px-6">
                            <span className="font-semibold text-gray-100">
                                <span className="font-mono text-cyan-400">&lt;</span> Edwin Bonilla Dolores{" "}
                                <span className="font-mono text-violet-400">/&gt;</span>
                            </span>
                            <button
                                ref={closeBtnRef}
                                type="button"
                                onClick={closeNav}
                                aria-label="Cerrar menú"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40"
                            >
                                <AiOutlineClose size={22} />
                            </button>
                        </div>

                        <ul className="relative mt-8 space-y-3 px-8 pb-12">
                            {LINKS.map(({ to, label }, i) => (
                                <motion.li
                                    key={to}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.06 }}
                                >
                                    <Link
                                        to={to}
                                        href={`#${to}`}
                                        onClick={closeNav}
                                        {...scrollProps}
                                        activeClass="text-cyan-300! border-cyan-400/40!"
                                        className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-xl font-semibold text-gray-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40"
                                    >
                                        <span className="font-mono text-sm text-cyan-400">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar