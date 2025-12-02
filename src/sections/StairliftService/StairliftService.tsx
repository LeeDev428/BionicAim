import { useInView } from '../../hooks/useInView';
import Button from '../../components/Button/Button';
import './StairliftService.css';

const StairliftService = () => {
  const { ref, isInView } = useInView();
  const { ref: quoteRef, isInView: quoteInView } = useInView();

  return (
    <>
      <section className="section stairlift-service" ref={ref}>
        <div className="container stairlift-container">
          <div className={`stairlift-visual ${isInView ? 'animate-slideInLeft' : ''}`}>
            <div className="stairlift-image-card">
              <div className="image-placeholder stairlift-placeholder">
              </div>
            </div>
            <div className="floating-tag">
              <span className="tag-icon">⭐</span>
              <span className="tag-text">Top Rated Service</span>
            </div>
          </div>
          
          <div className={`stairlift-content ${isInView ? 'animate-slideInRight delay-2' : ''}`}>
            <div className="stairlift-header">
              <div className="stairlift-icon-wrapper">
                <span className="stairlift-icon">⚡</span>
              </div>
              <div className="stairlift-titles">
                <h2 className="stairlift-title">Professional Stairlift</h2>
                <h3 className="stairlift-subtitle">Service and Repairs</h3>
              </div>
            </div>
            
            <div className="stairlift-details">
              <div className="detail-item">
                <p className="detail-question">Need a new stairlift?</p>
                <p className="detail-answer">We'll help you choose the right fit—with comfort and safety in mind.</p>
              </div>
              <div className="detail-item">
                <p className="detail-question">Is your stairlift acting up?</p>
                <p className="detail-answer">Let our experienced team take care of the repairs—fast and hassle-free.</p>
              </div>
              <div className="detail-item">
                <p className="detail-question">Want to keep it running smoothly?</p>
                <p className="detail-answer">Ask about our Home Maintenance plans for lasting performance.</p>
              </div>
            </div>

            <div className="stairlift-badges">
              <div className="badge-item">
                <span className="badge-icon">🔧</span>
                <span>Expert Repairs</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">📋</span>
                <span>Free Assessment</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">⏱️</span>
                <span>Quick Response</span>
              </div>
            </div>

            <Button href="/stairlifts">View Plans →</Button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section" ref={quoteRef}>
        <div className="container">
          <blockquote className={`quote-content ${quoteInView ? 'animate-fadeInUp' : ''}`}>
            <p className="quote-text">
              "Life is more than just knowing you can breathe. It's about having the freedom to fully live, 
              to go, to show you're capable of, and when you believe in it's ability—movement that feeling, 
              it connects you to the world and lets you fully enjoy it."
            </p>
            <div className="quote-decoration">
              <span className="quote-line"></span>
              <span className="quote-icon">💙</span>
              <span className="quote-line"></span>
            </div>
          </blockquote>
        </div>
      </section>
    </>
  );
};

export default StairliftService;
