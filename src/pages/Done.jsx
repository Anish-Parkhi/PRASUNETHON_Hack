import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../assets/animation.json';
import Navbar from '../components/Navbar/Navbar';

function Done() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh',
        }}
      >
        <Lottie options={defaultOptions} height={400} width={400} />
        <div
          style={{
            marginTop: '20px',
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'poppins',
          }}
        >
          Registration Completed
        </div>
        <button
        className='rounded-md text-white mt-5 border-2 bg-blue-500  p-2'
          onClick={() => {
            navigate('/');
          }}
        >
          Go to Home
        </button>
      </div>
    </>
  );
}

export default Done;
