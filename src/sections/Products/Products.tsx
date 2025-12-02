import { useInView } from '../../hooks/useInView';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './Products.css';

const products = [
  {
    name: 'Curved Stairlift',
    description: 'Perfect for curved or spiral staircases',
    price: 'From $4,999',
  },
  {
    name: 'Straight Stairlift',
    description: 'Ideal for straight staircases',
    price: 'From $2,499',
  },
  {
    name: 'Home Elevator',
    description: 'Luxury residential elevator solutions',
    price: 'From $15,999',
  },
];

const Products = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="products" className="section products">
      <div className="container" ref={ref}>
        <div className={isInView ? 'animate-fadeInUp' : ''} style={{ opacity: isInView ? 1 : 0 }}>
          <SectionTitle 
            subtitle="Our Products" 
            title="Quality Mobility Solutions" 
          />
        </div>
        <div className={`products-grid ${isInView ? 'visible' : ''}`}>
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="product-image">
                <div className="product-placeholder"></div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <span className="product-price">{product.price}</span>
                <Button variant="outline" href="#contact">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
