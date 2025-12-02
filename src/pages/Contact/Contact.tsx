import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './Contact.css';

const Contact = () => {
  const { ref: formRef, isInView: formInView } = useInView();
  const { ref: infoRef, isInView: infoInView } = useInView();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const reasons = [
    'Request an appointment to service or repair a device you already own.',
    'Learn more about our service plans.',
    'Any other question or concern.',
  ];

  return (
    <div className="page contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <SectionTitle subtitle="Get In Touch" title="How can We help?" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className={`contact-form-wrapper ${formInView ? 'animate-slideInLeft' : ''}`} ref={formRef}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    Name<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address<span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="sample@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message<span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <Button>SUBMIT</Button>
              </form>
            </div>

            {/* Info */}
            <div className={`contact-info ${infoInView ? 'animate-slideInRight' : ''}`} ref={infoRef}>
              <h3>Please fill the form to:</h3>
              <ul className="reasons-list">
                {reasons.map((reason, index) => (
                  <li key={index}>
                    <span className="bullet">•</span>
                    {reason}
                  </li>
                ))}
              </ul>

              <div className="contact-details">
                <h4>Or reach us directly:</h4>
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>Bay Area, California</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">✉️</span>
                  <span>info@bionicaim.com</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🕐</span>
                  <span>24/7 Emergency Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="map-section">
        <div className="map-placeholder">
          <span>🗺️</span>
          <p>Map Location</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
