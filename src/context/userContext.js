import { createContext } from 'react';

const userEmail = localStorage.getItem('user');

const userContext = createContext(userEmail);

export default userContext;
