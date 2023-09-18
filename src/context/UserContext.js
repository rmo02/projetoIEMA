// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api';
 // Importe a instância da sua API

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const res = await api.get('/employees');
      setUsers(res.data);
      console.log('get funcionário atualizado')
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ users, getUser }}>
      {children}
    </UserContext.Provider>
  );
};
