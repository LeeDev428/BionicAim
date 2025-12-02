import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Loading from './components/Loading/Loading';
import Navbar from './components/Navbar/Navbar';
import Footer from './sections/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Stairlifts from './pages/Stairlifts/Stairlifts';
import Elevators from './pages/Elevators/Elevators';
import ServicePlans from './pages/ServicePlans/ServicePlans';

// Scroll to top on route change
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading && <Loading />}
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stairlifts" element={<Stairlifts />} />
          <Route path="/elevators" element={<Elevators />} />
          <Route path="/service-plans" element={<ServicePlans />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
