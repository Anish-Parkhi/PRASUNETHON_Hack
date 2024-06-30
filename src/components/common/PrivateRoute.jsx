import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import userContext from '../../context/userContext';

function PrivateRoute() {
  const { user } = useContext(userContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
