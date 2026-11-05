import React, { useCallback, useEffect, useRef, useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link, animateScroll } from "react-scroll"
import { AnimatePresence, motion } from "framer-motion"

// "to" debe coincidir con el id de cada sección
const LINKS = [
    { to: "skills", label: "Tecnologías" },
    { to: "experience", label: "Experiencia" },
    { to: "portfolio", label: "Proyectos" },
    { to: "courses", label: "Formación" },
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
                className={`fixed left-0 top-0 z-50 w-full border-b transition-colors duration-300 ${
                    scrolled
                        ? "border-line bg-canvas "
                        : "border-transparent bg-canvas"
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
                        className="group flex items-center gap-2 rounded font-semibold text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                    >
                        <span className="text-base md:text-lg">
                            Edwin Bonilla<span className="hidden sm:inline"> Dolores</span>
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
                                    activeClass="text-accent! bg-surface! border-line!"
                                    className="cursor-pointer rounded border border-transparent px-3 py-2 font-mono text-sm text-muted transition-colors duration-200 hover:bg-surface hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
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
                        className="flex h-10 w-10 items-center justify-center rounded border border-line bg-surface text-fg transition-colors hover:border-accent hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas md:hidden"
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-canvas md:hidden"
                    >
                        {/* Barra superior con marca y botón de cerrar */}
                        <div className="relative flex h-16 items-center justify-between px-6">
                            <span className="font-semibold text-fg">
                                Edwin Bonilla Dolores
                            </span>
                            <button
                                ref={closeBtnRef}
                                type="button"
                                onClick={closeNav}
                                aria-label="Cerrar menú"
                                className="flex h-10 w-10 items-center justify-center rounded border border-line bg-surface text-fg transition-colors hover:border-accent hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                            >
                                <AiOutlineClose size={22} />
                            </button>
                        </div>

                        <ul className="relative mt-8 space-y-3 px-8 pb-12">
                            {LINKS.map(({ to, label }, i) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        href={`#${to}`}
                                        onClick={closeNav}
                                        {...scrollProps}
                                        activeClass="text-accent! border-accent!"
                                        className="flex items-center gap-4 rounded border border-line bg-surface px-5 py-4 text-xl font-semibold text-fg transition-colors hover:border-accent hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                                    >
                                        <span className="font-mono text-sm text-accent">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
