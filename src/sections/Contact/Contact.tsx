import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './Contact.css';

const Contact = () => {
  const { ref, isInView } = useInView();
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

  return (
    <section id="contact" className="section contact">
      <div className="container" ref={ref}>
        <div className={isInView ? 'animate-fadeInUp' : ''} style={{ opacity: isInView ? 1 : 0 }}>
          <SectionTitle 
            subtitle="Contact Us" 
            title="Get In Touch" 
          />
        </div>
        <div className={`contact-grid ${isInView ? 'visible' : ''}`}>
          <div className="contact-info animate-slideInLeft">
            <h3>Let's Talk</h3>
            <p>Ready to enhance your mobility? Contact us for a free consultation.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Mobility Street, City, State 12345</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@bionicaim.com</span>
              </div>
            </div>
          </div>
          <form className="contact-form animate-slideInRight" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <Button>Send Message →</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
