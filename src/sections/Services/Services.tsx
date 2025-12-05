import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.css';

const services = [
  {
    icon: '🪜',
    title: 'Stairlifts',
    description: 'Safe and reliable stairlifts designed for comfort and ease of use in any home.',
    link: '/stairlifts',
  },
  {
    icon: '🛗',
    title: 'Residential Elevators',
    description: 'Custom home elevators that blend seamlessly with your interior design.',
    link: '/elevators',
  },
  {
    icon: '🛠️',
    title: 'Service Plans',
    description: 'Comprehensive maintenance and service plans to keep your equipment running smoothly.',
    link: '/service-plans',
  },
  {
    icon: '📞',
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all your mobility needs.',
    link: '/contact',
  },
];

const Services = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="section services">
      <div className="container" ref={ref}>
        <div className={isInView ? 'animate-fadeInUp' : ''} style={{ opacity: isInView ? 1 : 0 }}>
          <SectionTitle 
            subtitle="What We Offer" 
            title="Our Services" 
          />
        </div>
        <div className={`services-grid ${isInView ? 'visible' : ''}`}>
          {services.map((service, index) => (
            <Link 
              to={service.link}
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <span className="service-link">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
