import Hero from '../../sections/Hero/Hero';
import Services from '../../sections/Services/Services';
import FutureUpgrade from '../../sections/FutureUpgrade/FutureUpgrade';
import ElevatorService from '../../sections/ElevatorService/ElevatorService';
import StairliftService from '../../sections/StairliftService/StairliftService';
import './Home.css';

const Home = () => {
  return (
    <div className="page home-page">
      <Hero />
      <Services />
      <FutureUpgrade />
      <ElevatorService />
      <StairliftService />
    </div>
  );
};

export default Home;
