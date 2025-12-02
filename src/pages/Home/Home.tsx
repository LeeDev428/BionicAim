import Hero from '../sections/Hero/Hero';
import Services from '../sections/Services/Services';
import './Home.css';

const Home = () => {
  return (
    <div className="page home-page">
      <Hero />
      <Services />
    </div>
  );
};

export default Home;
