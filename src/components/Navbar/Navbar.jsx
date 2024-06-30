import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="p-3 flex justify-between items-center">
      <div className="p-1 font-normal">
        <div
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
          className={`${styles.logoFontContainer} text-5xl underline-offset-1 `}
        >
          COMMUNITY.
        </div>
        <div>Creating and building for harmony</div>
      </div>
      <div className="mr-6">
        <ul className="flex cursor-pointer justify-center text-xl items-center gap-6 ">
          <li>About us</li>
          <li>Resources</li>
          <li>Features</li>
          <li>Reviews</li>
          <li>Contact us</li>
          <AccountCircleIcon sx={{ fontSize: '3rem' }} />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
