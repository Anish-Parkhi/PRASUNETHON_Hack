import { useNavigate } from 'react-router-dom';
import image1 from '../assets/m1.svg';
import image2 from '../assets/m2.svg';
import image3 from '../assets/m3.svg';
import Navbar from '../components/Navbar/Navbar';
import styles from './styles.module.css';

const marketData = [
  {
    id: 1,
    name: 'Groceries',
    description:
      'All the fresh local produce from multiple sellers just at your fingertips.',
    image: image1,
  },
  {
    id: 2,
    name: 'Stationary',
    description: 'All you stationary supplies are here.',
    image: image2,
  },
  {
    id: 3,
    name: 'Hardware',
    description: 'Hardware and electric supplies.',
    image: image3,
  },
];

function MarketPlace() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className={` container py-4`}>
        <div className={styles.marketplaceBackgroundContainer}></div>
        <div className={styles.marketPlaceInnerContainer}>
          <h1
            className={` ${styles.marketplaceFontContainer} text-7xl mb-5 text-center  font-bold`}
          >
            Local Marketplace
          </h1>
          <div
            className={` ${styles.marketBottomDiv} flex flex-row gap-6 justify-center `}
          >
            {marketData.map((item) => (
              <div
                key={item.id}
                className="bg-white flex flex-col text-center justify-between w-1/5 h-80 p-4 rounded-lg shadow-md"
              >
                <img
                  src={item.image}
                  alt="market"
                  className="w-24 h-24 mx-auto"
                />
                <h2 className="text-2xl font-bold mt-2">{item.name}</h2>
                <p className="text-gray-600 text-md basis-10 w-4/5 self-center mt-2">
                  {item.description}
                </p>
                <button
                  onClick={() => {
                    navigate('/shop');
                  }}
                  className="text-white self-center mt-4 w-2/5 bg-black p-1 rounded-md"
                >
                  View more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
