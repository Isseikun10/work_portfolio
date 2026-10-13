import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

// Secciones bajo el pliegue: se cargan en un chunk aparte para acelerar la carga inicial
const Skills = lazy(() => import("./components/Skills"))
const Experience = lazy(() => import("./components/Experience"))
const Portfolio = lazy(() => import("./components/Portfolio"))
const Courses = lazy(() => import("./components/Courses"))
const Contact = lazy(() => import("./components/Contact"))

const Loader = () => (
    <div
        role="status"
        aria-live="polite"
        className="flex min-h-[60vh] flex-col items-center justify-center gap-4 font-mono text-cyan-400"
    >
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400" />
        <span className="text-sm">
            cargando<span className="animate-pulse">...</span>
        </span>
    </div>
)

const App = () => {
    return (
        <>
            {/* Salto de teclado al contenido */}
            <a
                href="#main"
                className="sr-only z-[100] rounded-md bg-gray-950 px-4 py-2 font-mono text-sm text-cyan-300 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
            >
                Saltar al contenido
            </a>

            <Navbar />

            <main id="main" className="relative">
                <Hero /> {/* id="home" */}
                <Suspense fallback={<Loader />}>
                    <Skills /> {/* id="skills"     · "Acerca de" */}
                    <Experience /> {/* id="experience" · "Experiencia" */}
                    <Portfolio /> {/* id="portfolio"  · "Portafolio" */}
                    <Courses /> {/* id="courses"    · "Cursos y Certificados" */}
                    <Contact /> {/* id="contact"    · "Contacto" */}
                </Suspense>
            </main>

            <Footer />
        </>
    )
}

export default App
