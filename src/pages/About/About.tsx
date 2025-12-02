import { useInView } from '../../hooks/useInView';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './About.css';

const About = () => {
  const { ref: heroRef, isInView: heroInView } = useInView();
  const { ref: missionRef, isInView: missionInView } = useInView();
  const { ref: visionRef, isInView: visionInView } = useInView();
  const { ref: statsRef, isInView: statsInView } = useInView();

  const stats = [
    { number: '2005', label: 'Serving Since' },
    { number: '5000+', label: 'Devices Serviced' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Satisfaction Goal' },
  ];

  return (
    <div className="page about-page">
      {/* Hero Section */}
      <section className="about-hero" ref={heroRef}>
        <div className="container">
          <div className={`about-hero-content ${heroInView ? 'animate-fadeInUp' : ''}`}>
            <span className="hero-label">Welcome to</span>
            <h1 className="hero-title">
              <span className="highlight">BionicAIM</span> LLC
            </h1>
            <h2 className="hero-subtitle">Wheelchair Lift & Ramp Service and Repair</h2>
            <p className="hero-tagline">Proudly serving the bay area since 2005.</p>
          </div>
          <div className={`about-hero-image ${heroInView ? 'animate-slideInRight delay-2' : ''}`}>
            <div className="image-placeholder">
              <span>🏢</span>
              <p>Team Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision section">
        <div className="container">
          <div className="mv-grid">
            {/* Mission */}
            <div className={`mv-card ${missionInView ? 'animate-slideInLeft' : ''}`} ref={missionRef}>
              <h3 className="mv-title mission-title">Our Mission</h3>
              <p className="mv-intro">
                At BionicAIM, our mission is simple:
              </p>
              <p className="mv-highlight">
                We're here to support all modern mobility technologies—and more importantly, 
                the people who rely on them every day.
              </p>
              <p className="mv-text">
                We proudly stand with individuals in the disabled and limited mobility community 
                by helping protect their freedom, safety, and independence. When something goes wrong, 
                you don't have to face it alone.
              </p>
              <p className="mv-text">
                Our <span className="text-primary">Mobility Service Excellence (MSE)</span> team is ready 
                to come to you—quickly, respectfully, and with the care you deserve. Whether you need a 
                repair, maintenance, or just someone who listens and understands, we're here to help.
              </p>
              <p className="mv-quote">
                <em>Because mobility isn't just about equipment. It's about dignity, confidence, and living fully.</em>
              </p>
            </div>

            {/* Vision */}
            <div className={`mv-card ${visionInView ? 'animate-slideInRight' : ''}`} ref={visionRef}>
              <h3 className="mv-title vision-title">Our Vision</h3>
              <p className="mv-highlight">
                Your well-being is at the heart of everything we do.
              </p>
              <p className="mv-text">
                By partnering with hospitals, retirement communities, and care providers, we aim to 
                expand more than just technical support—we're building the largest, most reliable, 
                and safest transportation and mobility service network for individuals with limited mobility.
              </p>
              <p className="mv-text">
                Accessible anytime, anywhere, and always at no extra cost.
              </p>
              <p className="mv-text">
                Our vision is to be more than a service provider.
              </p>
              <p className="mv-text">
                We strive to be a trusted resource—always available, always ready to support you 
                and anyone in need of mobility assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats section" ref={statsRef}>
        <div className="container">
          <SectionTitle subtitle="Our Impact" title="Numbers That Matter" />
          <div className={`stats-grid ${statsInView ? 'visible' : ''}`}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section">
        <div className="container">
          <SectionTitle subtitle="Why Choose Us" title="What Sets Us Apart" />
          <div className="why-grid">
            <div className="why-card">
              <span className="why-icon">🛡️</span>
              <h4>Trusted Expertise</h4>
              <p>Over 18 years of specialized experience in mobility equipment service and repair.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">⚡</span>
              <h4>Fast Response</h4>
              <p>Quick turnaround times because we understand your mobility can't wait.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">❤️</span>
              <h4>Compassionate Care</h4>
              <p>We treat every client with respect, dignity, and genuine understanding.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">✅</span>
              <h4>Quality Guaranteed</h4>
              <p>All our work is backed by our commitment to excellence and satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
