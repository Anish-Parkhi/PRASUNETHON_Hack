import v1 from '../assets/v1.svg';
import Navbar from '../components/Navbar/Navbar';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const volData = [
  {
    id: 1,
    name: 'Donation drive',
    venue: '98-K, TH-hall, Ahemadnagar, Pin-414020',
    description:
      'Our society will soon host a donation drive, uniting residents to support a meaningful cause. Participants will contribute essential items and resources to those in need, fostering a spirit of generosity and community.',
    date: '12-4-24',
    img: v1,
  },
];

function Volunteers() {
    const navigate = useNavigate();
  return (
    <div>
      <Navbar color="#F2F1EF" />
      <div className={styles.volunteerBGContainer}>
        <div className={styles.volunteerFont}>Volunteers Required</div>
        <div className="w-full flex flex-col gap-3 m-auto justify-center">
          {volData.map((data) => (
            <div
              className="p-4 m-auto w-3/5 rounded-lg flex flex-row justify-center gap-3 text-left border-md bg-white border-2 "
              key={data.id}
            >
              <div className="w-2/4 basis-2/4 ">
                <img
                  src={data.img}
                  alt="volunteer"
                  className={styles.volunteerImage}
                />
              </div>
              <div>
                <div className="text-lg">
                  {' '}
                  <b>{data.name} </b>{' '}
                </div>
                <div className={styles.volunteerDataVenue}>
                  <b>Venue:</b> {data.venue}
                </div>
                <div className={styles.volunteerDataDate}>
                  <b>Date:</b> {data.date}
                </div>
                <div className={styles.volunteerDataDescription}>
                  {data.description}
                </div>
                <button onClick={() => {
                    navigate('/volunteerRegistration');
                }} className='bg-black text-white self-end p-1 border-2 rounded-md mt-2 ml-auto' >View more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Volunteers;
