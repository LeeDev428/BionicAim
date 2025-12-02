import { useState, useEffect } from 'react';
import './App.css';

// Components
import Loading from './components/Loading/Loading';
import Navbar from './components/Navbar/Navbar';

// Sections
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Products from './sections/Products/Products';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
