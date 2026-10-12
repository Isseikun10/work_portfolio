import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Courses from './components/Courses';

const App = () => {

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#1f0b0b] text-red-500 text-2xl font-semibold">
        Cargando...
      </div>
    }>
      <Navbar />
      <main className="relative">
        <Hero />         {/* id="hero"      - no navegable */}
        <Skills />       {/* id="skills"    - "Acerca de" */}
        <Portfolio />    {/* id="portfolio" - "Portafolio" */}
        <Courses />      {/* id="courses"   - "Cursos y Certificados" */}
        <Experience />   {/* sin id         - no navegable */}
        <Contact />      {/* id="contact"   - "Contacto" */}
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;