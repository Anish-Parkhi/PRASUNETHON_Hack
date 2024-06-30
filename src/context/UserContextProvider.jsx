import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import userContext from './userContext';


const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};

export default UserContextProvider;
