import { useInView } from '../../hooks/useInView';
import Button from '../../components/Button/Button';
import './ElevatorService.css';

const ElevatorService = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section elevator-service" ref={ref}>
      <div className="container elevator-container">
        <div className={`elevator-content ${isInView ? 'animate-slideInLeft' : ''}`}>
          <div className="elevator-header">
            <div className="elevator-icon-wrapper">
              <span className="elevator-icon">🏠</span>
            </div>
            <div className="elevator-titles">
              <h2 className="elevator-title">Expert Residential Elevator</h2>
              <h3 className="elevator-subtitle">Service and Repair</h3>
            </div>
          </div>
          
          <div className="elevator-details">
            <p className="detail-highlight">One Call is All It Takes.</p>
            <p className="detail-text">
              Our trained technicians are committed to delivering the highest level of 
              service whenever you and your family need it most.
            </p>
            <p className="detail-text">
              At the heart of our work is a simple goal: to protect and restore your 
              mobility and independence. We follow all manufacturer service guidelines 
              and ensure every adjustment complies fully with California's ASME A17.1 
              Safety regulations.
            </p>
            <p className="detail-accent">Now available in White!</p>
          </div>

          <div className="elevator-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Elevators Serviced</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Emergency Support</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">ASME Compliant</span>
            </div>
          </div>

          <Button href="/elevators">View Plans →</Button>
        </div>
        
        <div className={`elevator-visual ${isInView ? 'animate-slideInRight delay-2' : ''}`}>
          <div className="elevator-image-card">
            <div className="image-placeholder elevator-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-icon">🛗</span>
                <span className="placeholder-label">Home Elevator</span>
              </div>
              <div className="elevator-overlay">
                <div className="overlay-item">
                  <span>✓</span> Professional Installation
                </div>
                <div className="overlay-item">
                  <span>✓</span> Regular Maintenance
                </div>
                <div className="overlay-item">
                  <span>✓</span> Safety Certified
                </div>
              </div>
            </div>
          </div>
          <div className="floating-card">
            <span className="card-icon">🔧</span>
            <div className="card-content">
              <span className="card-title">Expert Service</span>
              <span className="card-text">Certified Technicians</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevatorService;
