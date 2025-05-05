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
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Courses />
      <Experience />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;