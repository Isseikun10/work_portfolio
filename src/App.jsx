import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


const App = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Hero />
    </Suspense>
  )
}

export default App;