import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ParkIcon from '@mui/icons-material/Park';
import PoolIcon from '@mui/icons-material/Pool';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TvIcon from '@mui/icons-material/Tv';
import WeekendIcon from '@mui/icons-material/Weekend';
import YardIcon from '@mui/icons-material/Yard';
import Navbar from '../components/Navbar/Navbar';
import styles from './styles.module.css';

const facilitiesName = [
  {
    id: 1,
    name: 'Swimming Pool',
    icon: <PoolIcon sx={{ fontSize: '3rem' }} />,
  },
  {
    id: 2,
    name: 'Mini Theatre',
    icon: <TvIcon sx={{ fontSize: '3rem' }} />,
  },
  {
    id: 3,
    name: 'Park',
    icon: <ParkIcon sx={{ fontSize: '3rem' }} />,
  },
  {
    id: 4,
    name: 'Weekend Market',
    icon: <WeekendIcon sx={{ fontSize: '3rem' }} />,
  },
  {
    id: 5,
    name: 'Garden',
    icon: <YardIcon sx={{ fontSize: '3rem' }} />,
  },
  {
    id: 6,
    name: 'Fitness Center and Gym',
    icon: <FitnessCenterIcon sx={{ fontSize: '3rem' }} />,
  },
  {
    id: 7,
    name: 'Jogging Track',
    icon: <DirectionsWalkIcon sx={{ fontSize: '3rem' }} />,
  },
  {
    id: 8,
    name: 'Sports Arena',
    icon: <SportsEsportsIcon sx={{ fontSize: '3rem' }} />,
  },
];

function Facilites() {
  return (
    <div>
      <Navbar color="#89CFDB" />
      <div className={styles.facilitesBackgroundContainer}>
        <div className={styles.facilitesFont}>Facilites Provided</div>

        <div className="w-3/4  m-auto flex justify-between gap-3  flex-wrap">
          {facilitiesName.map((facility) => (
            <div
              className="border-2 min-h-12 bg-white rounded-lg drop-shadow-xl shadow-md p-8 gap-3 flex flex-col justify-center text-center w-1/5"
              key={facility.id}
            >
              <div>{facility.icon}</div>
              <div className="text-lg w-full">{facility.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facilites;
