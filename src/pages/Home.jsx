import { useContext } from 'react';
import Card from '../components/Card/Card';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider';
import userContext from '../context/userContext';
import cardInfo from '../utils/HomeCards';
import { useNavigate } from 'react-router-dom';
function Home() {
  const { user } = useContext(userContext);
  const gradientStyle = {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #ECFFFB 40.28%)',
    height: '100vh',
  };
  const navigate = useNavigate();
  console.log(user);
  return (
    <div>
      <Navbar />
      <Slider />
      <div style={gradientStyle} className={` w-full`}>
        <div className="align-center text-center text-gray-800 font-medium text-2xl justify-center w-full	">
          Connect and engage with your local community right now by using our
          following services.
        </div>
        <div className="flex mt-8 flex-wrap justify-center gap-8">
          {cardInfo.map((card) => (
            <Card
              icon={card.icon}
              key={card.id}
              title={card.title}
              description={card.description}
              onClick={() => navigate(card.to)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
