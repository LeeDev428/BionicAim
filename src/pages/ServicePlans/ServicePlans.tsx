import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './ServicePlans.css';

const deviceCategories = [
  { id: 'stairlift', name: 'Stairlift', image: '/img/service plan/stairlift.png', link: '/stairlifts', desc: 'Service Plan' },
  { id: 'elevator', name: 'Elevator', image: '/img/service plan/elevator.png', link: '/elevators', desc: 'Service Plan' },
  { id: 'wheelchair', name: 'Wheelchair Lift', image: '/img/service plan/wheelchair lift.png', link: '/contact', desc: 'Service Plan' },
  { id: 'remote', name: 'Remote Control', image: '/img/service plan/remote control.png', link: '/contact', desc: 'Upgrade' },
  { id: 'questions', name: 'Questions?', image: '/img/service plan/questions.png', link: '/contact', desc: 'We are here for you!', highlight: true },
];

const ServicePlans = () => {
  const { ref: heroRef, isInView: heroInView } = useInView();
  const { ref: categoriesRef, isInView: categoriesInView } = useInView();
  const { ref: comparisonRef, isInView: comparisonInView } = useInView();
  const [activeTab, setActiveTab] = useState<'stairlift' | 'elevator'>('stairlift');

  const comparisonData = {
    stairlift: {
      features: [
        { name: 'Routine Maintenance', basic: true, premium: true },
        { name: 'Cleaning & Lubrication', basic: true, premium: true },
        { name: 'Battery Replacement', basic: '2 years', premium: 'Included' },
        { name: 'Troubleshooting', basic: false, premium: true },
        { name: 'Free Repairs', basic: false, premium: true },
        { name: 'Priority Scheduling', basic: false, premium: true },
        { name: '24/7 Emergency Support', basic: false, premium: true },
      ],
      basicPrice: '69.99',
      premiumPrice: '99.99',
    },
    elevator: {
      features: [
        { name: 'Annual Service Visit', basic: true, premium: true },
        { name: 'Cleaning & Lubrication', basic: true, premium: true },
        { name: 'Battery Replacement', basic: false, premium: true },
        { name: 'Free Troubleshooting', basic: true, premium: true },
        { name: 'Repair Discounts', basic: false, premium: '50%' },
        { name: 'Priority Service', basic: false, premium: true },
        { name: 'Biannual Visits', basic: false, premium: true },
      ],
      basicPrice: '59.99',
      premiumPrice: '99.99',
    },
  };

  const currentComparison = comparisonData[activeTab];

  return (
    <div className="page service-plans-page">
      {/* Hero */}
      <section className="sp-hero" ref={heroRef}>
        <div className="container">
          <div className={`hero-content ${heroInView ? 'animate-fadeInUp' : ''}`}>
            <SectionTitle 
              subtitle="Protection & Peace of Mind" 
              title="Our Service Plans" 
            />
            <p className="hero-desc">
              Look at the type of devices you own and click on the image or the button. 
              Select the plan that best suits what you are looking for and, for as long as 
              you want (Forever!) your mobility will be protected.
            </p>
          </div>
        </div>
      </section>

      {/* Device Categories */}
      <section className="sp-categories section" ref={categoriesRef}>
        <div className="container">
          <div className={`categories-grid ${categoriesInView ? 'visible' : ''}`}>
            {deviceCategories.map((category, index) => (
              <a 
                key={category.id}
                href={category.link}
                className={`category-card ${category.highlight ? 'highlight' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="category-image">
                  <img src={category.image} alt={category.name} className="category-img" />
                </div>
                <div className="category-info">
                  <h3 className={category.highlight ? 'highlight-text' : ''}>{category.name}</h3>
                  <p className={category.highlight ? 'highlight-desc' : ''}>{category.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Comparison */}
      <section className="sp-comparison section" ref={comparisonRef}>
        <div className="container">
          <SectionTitle subtitle="Compare Plans" title="Find the Right Plan for You" />
          <br />
          
          {/* Tab Switcher */}
          <div className="comparison-tabs">
            <button 
              className={`tab-btn ${activeTab === 'stairlift' ? 'active' : ''}`}
              onClick={() => setActiveTab('stairlift')}
            >
              Stairlift Plans
            </button>
            <button 
              className={`tab-btn ${activeTab === 'elevator' ? 'active' : ''}`}
              onClick={() => setActiveTab('elevator')}
            >
              Elevator Plans
            </button>
          </div>

          {/* Comparison Table */}
          <div className={`comparison-table ${comparisonInView ? 'animate-fadeInUp' : ''}`}>
            <div className="table-header">
              <div className="feature-col">Features</div>
              <div className="plan-col">Basic</div>
              <div className="plan-col premium">Premium</div>
            </div>
            <div className="table-body">
              {currentComparison.features.map((feature, index) => (
                <div key={index} className="table-row">
                  <div className="feature-col">{feature.name}</div>
                  <div className="plan-col">
                    {typeof feature.basic === 'boolean' ? (
                      feature.basic ? <span className="check">✓</span> : <span className="x">✕</span>
                    ) : (
                      <span className="text-value">{feature.basic}</span>
                    )}
                  </div>
                  <div className="plan-col premium">
                    {typeof feature.premium === 'boolean' ? (
                      feature.premium ? <span className="check">✓</span> : <span className="x">✕</span>
                    ) : (
                      <span className="text-value">{feature.premium}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="table-footer">
              <div className="feature-col">Monthly Price</div>
              <div className="plan-col">
                <span className="price">${currentComparison.basicPrice}</span>
                <span className="period">/device</span>
              </div>
              <div className="plan-col premium">
                <span className="price">${currentComparison.premiumPrice}</span>
                <span className="period">/device</span>
              </div>
            </div>
          </div>

          <div className="comparison-actions">
            <Button href={activeTab === 'stairlift' ? '/stairlifts' : '/elevators'}>
              View Full {activeTab === 'stairlift' ? 'Stairlift' : 'Elevator'} Plans →
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="sp-benefits section">
        <div className="container">
          <SectionTitle subtitle="Why Get a Plan?" title="Benefits of Service Plans" />
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">💰</span>
              <h4>Save Money</h4>
              <p>Predictable monthly costs instead of surprise repair bills</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">⏰</span>
              <h4>Priority Service</h4>
              <p>Get faster response times when you need help</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🛡️</span>
              <h4>Peace of Mind</h4>
              <p>Know your equipment is always maintained properly</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📈</span>
              <h4>Extended Lifespan</h4>
              <p>Regular maintenance extends your equipment's life</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Not sure which plan is right for you?</h2>
            <p>Our team is here to help you choose the perfect coverage for your needs.</p>
            <Button href="/contact">Contact Us for a Free Consultation →</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePlans;
