import { useInView } from '../../hooks/useInView';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './Elevators.css';

const elevatorPlans = [
  {
    id: 'RE25B',
    name: 'Basic Service Plan',
    tagline: 'Promote performance & extend the life of your device',
    price: '59.99',
    included: [
      'Cleaning — Remove dust, debris, and buildup',
      'Lubrication — Keep moving parts running smoothly',
      'Adjustments — Ensure optimal performance and alignment',
      'Annual Visit — One professional service every 12 months',
      'Free Troubleshooting — On-demand diagnostic visit anytime',
    ],
    notIncluded: [
      'Repairs or replacement of parts',
      'Any issue requiring corrective repair work',
    ],
  },
  {
    id: 'RE25D',
    name: 'Care Plan with Discounts on Repairs',
    tagline: 'Premium protection + Peace of mind',
    price: '99.99',
    featured: true,
    included: [
      'Free Troubleshooting — Diagnose issues at no charge',
      'Cleaning — Remove dirt, dust, and grime',
      'Lubrication — Smooth and quiet operation',
      'Adjustments — Precision tuning for performance',
      'Biannual Visits — One service visit every 6 months',
      'Free Battery Replacement — Every 2 years included',
      'All Questions Answered — Expert support, always',
      'Priority Scheduling — Get faster service when needed',
    ],
    notIncluded: [
      'Half of your repair bill is not covered (you pay 50%).',
    ],
  },
  {
    id: 'RE25C',
    name: 'Complete Service & Repair Plan',
    tagline: 'Get the most out of your device — for life',
    price: '125.99',
    included: [
      'Free Troubleshooting Visits — Unlimited diagnostics',
      'Free Priority Troubleshooting — Immediate attention, no delays',
      'Free Priority Parts Installation — Fast, expert repair with no labor fees',
      'Free Cleaning — Full system detailing',
      'Free Lubrication — Smooth and silent operation',
      'Free Adjustments — Fine-tuned for peak performance',
      'Free Anytime Consultations — Ask us anything, anytime',
      'Free Battery Replacement — For both unit and remotes',
      'Free Anytime Response & Visits — We come to you when you need us',
      'All Questions Answered — Dedicated customer support',
    ],
    notIncluded: [
      'Full Device Replacement',
      'Full Cabin Replacement',
    ],
  },
];

const Elevators = () => {
  const { ref: heroRef, isInView: heroInView } = useInView();
  const { ref: plansRef, isInView: plansInView } = useInView();
  const { ref: benefitsRef, isInView: benefitsInView } = useInView();

  const benefits = [
    { icon: '🏠', title: 'Home Integration', desc: 'Seamlessly blends with your home design' },
    { icon: '♿', title: 'Full Accessibility', desc: 'Easy access for wheelchairs and mobility aids' },
    { icon: '🔇', title: 'Quiet Operation', desc: 'Whisper-quiet for a peaceful home' },
    { icon: '🔒', title: 'Safety Features', desc: 'Multiple safety systems for peace of mind' },
  ];

  return (
    <div className="page elevators-page">
      {/* Hero */}
      <section className="elevators-hero" ref={heroRef}>
        <div className="container">
          <div className={`hero-content ${heroInView ? 'animate-fadeInUp' : ''}`}>
            <SectionTitle 
              subtitle="Residential Elevators" 
              title="Elevator Service & Maintenance Plans" 
            />
            <p className="hero-desc">
              Keep your home elevator running safely and efficiently with our professional 
              maintenance plans. From basic care to comprehensive coverage—we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="elevators-benefits section" ref={benefitsRef}>
        <div className="container">
          <div className={`benefits-grid ${benefitsInView ? 'visible' : ''}`}>
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="benefit-icon">{benefit.icon}</span>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="elevators-plans section" ref={plansRef}>
        <div className="container">
          <SectionTitle subtitle="Choose Your Plan" title="Service Plans" />
          <br />
          <div className={`elevator-plans-grid ${plansInView ? 'visible' : ''}`}>
            {elevatorPlans.map((plan, index) => (
              <div 
                key={plan.id} 
                className={`elevator-plan-card ${plan.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="plan-header">
                  <div className="plan-image-placeholder">
                    <span>🛗</span>
                    <p>Image</p>
                  </div>
                </div>

                <div className="plan-body">
                  <span className="plan-id">{plan.id}</span>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>

                  <div className="plan-details">
                    <div className="details-section">
                      <h4 className="details-title">
                        <span className="icon-check">☑</span> What's Included
                      </h4>
                      <ul>
                        {plan.included.map((item, i) => (
                          <li key={i}>
                            <span className="bullet green">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="details-section">
                      <h4 className="details-title warning">
                        <span className="icon-warn">⚠</span> What's Not Covered
                      </h4>
                      <ul>
                        {plan.notIncluded.map((item, i) => (
                          <li key={i}>
                            <span className="bullet red">✕</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="plan-footer">
                    <div className="plan-pricing">
                      <span className="price-amount">${plan.price}</span>
                      <span className="price-period">month/device</span>
                    </div>
                    <p className="plan-agreement">
                      By purchasing this plan, you agree to all <a href="#">terms and conditions</a>.
                    </p>
                    <Button>Enroll</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="elevators-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Looking for a new installation?</h2>
            <Button href="/contact">Schedule a consultation →</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Elevators;
