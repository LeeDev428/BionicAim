import { useInView } from '../../hooks/useInView';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './Stairlifts.css';

const stairliftPlans = [
  {
    id: 'SL25B',
    name: 'Basic Stairlift Maintenance Plan',
    description: 'Extend the life of your stairlift with routine maintenance—performed according to the manufacturers recommended service schedule.',
    price: '69.99',
    featured: false,
    included: [
      'A comprehensive inspection every six months to ensure optimal performance, including:',
      'Adjustment and fine-tuning',
      'Lubrication of moving parts',
      'Identification of potential issues',
      'Full cleaning',
      'Battery replacement every 2 years',
      'Expert answers to all your questions',
    ],
    notIncluded: [
      'Repairs',
      'Malfunctioning parts',
      'Installation of new or replacement parts',
    ],
  },
  {
    id: 'SL25F',
    name: 'Total Peace of Mind Plan',
    description: 'Our most recommended plan—for long-term freedom, confidence, and reliability. Your stairlift gives you independence at home. This all-inclusive service plan helps ensure that independence continues—without interruption.',
    price: '99.99',
    featured: true,
    included: [
      'Unlimited troubleshooting—anytime you need it',
      'Performance verification every six months',
      'Adjustment, lubrication, and full cleaning',
      'Paint touch-up and problem detection',
      'Expert answers to all your questions',
      'Annual comprehensive visit (includes six-month service procedure)',
      'Battery replacement (remote and seat base)',
      'Free repairs when needed',
      'Priority scheduling for repairs and troubleshooting',
      'Priority parts delivery and professional installation',
    ],
    notIncluded: [
      'Replacement of the entire device',
    ],
  },
];

const Stairlifts = () => {
  const { ref: heroRef, isInView: heroInView } = useInView();
  const { ref: plansRef, isInView: plansInView } = useInView();
  const { ref: featuresRef, isInView: featuresInView } = useInView();

  const features = [
    { icon: '🔧', title: 'Professional Installation', desc: 'Expert installation by certified technicians' },
    { icon: '🛡️', title: 'Safety First', desc: 'All units meet strict safety standards' },
    { icon: '⚡', title: 'Reliable Performance', desc: 'Smooth, quiet operation every time' },
    { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock emergency assistance' },
  ];

  return (
    <div className="page stairlifts-page">
      {/* Hero */}
      <section className="stairlifts-hero" ref={heroRef}>
        <div className="container">
          <div className={`hero-content ${heroInView ? 'animate-fadeInUp' : ''}`}>
            <SectionTitle 
              subtitle="Stairlift Services" 
              title="Stairlift Maintenance & Service Plans" 
            />
            <p className="hero-desc">
              Keep your stairlift running smoothly with our comprehensive maintenance plans. 
              Choose the coverage that's right for you and enjoy peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="stairlifts-features section" ref={featuresRef}>
        <div className="container">
          <div className={`features-grid ${featuresInView ? 'visible' : ''}`}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="feature-icon">{feature.icon}</span>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="stairlifts-plans section" ref={plansRef}>
        <div className="container">
          <SectionTitle subtitle="Choose Your Plan" title="Service Plans" />
          <div className={`plans-grid ${plansInView ? 'visible' : ''}`}>
            {stairliftPlans.map((plan, index) => (
              <div 
                key={plan.id} 
                className={`plan-card ${plan.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="plan-image">
                  <div className="image-placeholder">
                    <span>🪜</span>
                    <p>Image</p>
                  </div>
                </div>
                
                <div className="plan-content">
                  <span className="plan-id">{plan.id}</span>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-desc">{plan.description}</p>
                  
                  <div className="plan-section">
                    <h4 className="section-title included">What is covered</h4>
                    <ul className="plan-list">
                      {plan.included.map((item, i) => (
                        <li key={i} className="included-item">
                          <span className="check">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="plan-section">
                    <h4 className="section-title not-included">What is not covered</h4>
                    <ul className="plan-list">
                      {plan.notIncluded.map((item, i) => (
                        <li key={i} className="not-included-item">
                          <span className="x">✕</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="plan-details-link">See full details here.</p>

                  <div className="plan-price">
                    <span className="price">${plan.price}</span>
                    <span className="period">/month/device</span>
                  </div>

                  <Button href="/contact">Enroll in this plan →</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="stairlifts-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Need a Custom Solution?</h2>
            <p>Contact us for personalized stairlift recommendations and pricing.</p>
            <Button href="/contact">Schedule a Consultation →</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stairlifts;
