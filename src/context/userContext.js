import { createContext } from 'react';

const userEmail = localStorage.getItem('userEmail');

const userContext = createContext(userEmail);

export default userContext;
