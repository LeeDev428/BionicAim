import { useInView } from '../../hooks/useInView';
import Button from '../../components/Button/Button';
import './Hero.css';

const Hero = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-container" ref={ref}>
        <div className={`hero-content ${isInView ? 'animate-fadeInUp' : ''}`}>
          <h1 className="hero-title">
            Enhancing your
            <span className="highlight"> freedom of movement</span>
          </h1>
          <p className="hero-text">
            Wherever life takes you, we're here to help you get there 
            safely and comfortably with our innovative mobility solutions.
          </p>
          <div className="hero-buttons">
            <Button href="/service-plans">Discover our services →</Button>
            <Button href="/contact" variant="outline">Contact us</Button>
          </div>
        </div>
        <div className={`hero-visual ${isInView ? 'animate-slideInRight delay-2' : ''}`}>
          <div className="hero-image-wrapper">
            <div className="hero-shape"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>↓</span>
      </div>
    </section>
  );
};

export default Hero;
