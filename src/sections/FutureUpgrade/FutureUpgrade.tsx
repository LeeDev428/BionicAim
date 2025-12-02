import { useInView } from '../../hooks/useInView';
import Button from '../../components/Button/Button';
import './FutureUpgrade.css';

const FutureUpgrade = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section future-upgrade" ref={ref}>
      <div className="container future-container">
        <div className={`future-content ${isInView ? 'animate-slideInLeft' : ''}`}>
          <div className="future-header">
            <div className="future-icon-wrapper">
              <span className="future-icon">📱</span>
            </div>
            <h2 className="future-title">
              Upgrading to the <span className="highlight">future.</span>
            </h2>
          </div>
          <p className="future-text">
            Control and monitor your mobility equipment from anywhere 
            with our mobile app. Available for <span className="highlight-link">iOS</span> & <span className="highlight-link">Android</span>.
          </p>
          <div className="future-features">
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Real-time monitoring</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Remote diagnostics</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Instant notifications</span>
            </div>
          </div>
          <Button href="/contact">Inquire →</Button>
        </div>
        <div className={`future-visual ${isInView ? 'animate-slideInRight delay-2' : ''}`}>
          <div className="future-image-card">
            <div className="image-placeholder">
            </div>
          </div>
          <div className="floating-badge">
            <span className="badge-icon">⚡</span>
            <span className="badge-text">Smart Connected</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureUpgrade;
