import { useInView } from '../../hooks/useInView';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './About.css';

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '5000+', label: 'Happy Clients' },
  { number: '50+', label: 'Products' },
  { number: '24/7', label: 'Support' },
];

const About = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="section about">
      <div className="container" ref={ref}>
        <div className={`about-grid ${isInView ? 'visible' : ''}`}>
          <div className="about-content animate-slideInLeft">
            <SectionTitle 
              subtitle="About Us" 
              title="Empowering Mobility Solutions" 
              centered={false}
            />
            <p className="about-text">
              At Bionic AIM, we specialize in providing innovative mobility solutions 
              that enhance independence and quality of life. Our commitment to excellence 
              drives us to deliver products and services that meet the highest standards.
            </p>
            <p className="about-text">
              From stairlifts to residential elevators, we offer comprehensive solutions 
              tailored to your unique needs, ensuring safety, comfort, and reliability.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual animate-slideInRight">
            <div className="about-image">
              <div className="about-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
