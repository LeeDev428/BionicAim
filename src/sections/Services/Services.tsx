import { useInView } from '../../hooks/useInView';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Card from '../../components/Card/Card';
import './Services.css';

const services = [
  {
    icon: '🪜',
    title: 'Stairlifts',
    description: 'Safe and reliable stairlifts designed for comfort and ease of use in any home.',
  },
  {
    icon: '🏠',
    title: 'Residential Elevators',
    description: 'Custom home elevators that blend seamlessly with your interior design.',
  },
  {
    icon: '🛠️',
    title: 'Service Plans',
    description: 'Comprehensive maintenance and service plans to keep your equipment running smoothly.',
  },
  {
    icon: '📞',
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all your mobility needs.',
  },
];

const Services = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="section services">
      <div className="container" ref={ref}>
        <div className={isInView ? 'animate-fadeInUp' : ''} style={{ opacity: isInView ? 1 : 0 }}>
          <SectionTitle 
            subtitle="Our Services" 
            title="What We Offer" 
          />
        </div>
        <div className={`services-grid ${isInView ? 'visible' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
