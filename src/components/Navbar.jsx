import { useCallback, useEffect, useRef, useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link, animateScroll } from "react-scroll"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

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

const focusRing =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-soft focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const reduceMotion = useReducedMotion()

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

    // Solo cambia la sombra al hacer scroll; el fondo siempre es sólido
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
            {/* Header sólido: sin transparencia ni blur */}
            <header
                className={`fixed left-0 top-0 z-50 w-full border-b border-line bg-ink-950 transition-shadow duration-200 ${
                    scrolled ? "shadow-lg shadow-black/40" : ""
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
                        className={`flex items-center gap-2 rounded-sm font-semibold text-paper ${focusRing}`}
                    >
                        <span aria-hidden="true" className="font-mono text-rust-soft">
                            &lt;
                        </span>
                        <span className="text-base md:text-lg">
                            Edwin Bonilla<span className="hidden sm:inline"> Dolores</span>
                        </span>
                        <span aria-hidden="true" className="font-mono text-rust-soft">
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
                                    activeClass="text-rust-soft! bg-ink-800! border-line!"
                                    className={`cursor-pointer rounded-sm border border-transparent px-3 py-2 font-mono text-sm text-mute transition-colors hover:bg-ink-900 hover:text-paper ${focusRing}`}
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
                        className={`flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-ink-900 text-paper transition-colors hover:border-rust-soft hover:text-rust-soft md:hidden ${focusRing}`}
                    >
                        <AiOutlineMenu size={22} />
                    </button>
                </nav>
            </header>

            {/* Menú móvil: pantalla completa, fondo 100% opaco, por encima de todo */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={menuRef}
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menú de navegación"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={
                            reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 30 }
                        }
                        className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-ink-950 md:hidden"
                    >
                        {/* Barra superior con marca y botón de cerrar */}
                        <div className="flex h-16 items-center justify-between border-b border-line px-6">
                            <span className="font-semibold text-paper">
                                <span aria-hidden="true" className="font-mono text-rust-soft">
                                    &lt;
                                </span>{" "}
                                Edwin Bonilla Dolores{" "}
                                <span aria-hidden="true" className="font-mono text-rust-soft">
                                    /&gt;
                                </span>
                            </span>
                            <button
                                ref={closeBtnRef}
                                type="button"
                                onClick={closeNav}
                                aria-label="Cerrar menú"
                                className={`flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-ink-900 text-paper transition-colors hover:border-rust-soft hover:text-rust-soft ${focusRing}`}
                            >
                                <AiOutlineClose size={22} />
                            </button>
                        </div>

                        <ul className="mt-6 space-y-3 px-6 pb-12">
                            {LINKS.map(({ to, label }, i) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        href={`#${to}`}
                                        onClick={closeNav}
                                        {...scrollProps}
                                        activeClass="text-rust-soft! border-rust-soft!"
                                        className={`flex items-center gap-4 rounded-sm border border-line bg-ink-900 px-5 py-4 text-lg font-semibold text-paper transition-colors hover:border-rust-soft hover:text-rust-soft ${focusRing}`}
                                    >
                                        <span className="font-mono text-sm text-rust-soft">
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