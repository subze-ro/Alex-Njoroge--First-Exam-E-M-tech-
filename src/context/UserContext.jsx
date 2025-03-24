import React, { createContext, useState } from 'react';
import userData from '..//userData.json'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(userData);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const addUser = (user) => {
    setUsers([...users, { id: users.length + 1, ...user }]);
  };

  return (
    <UserContext.Provider value={{ users, deleteUser, addUser }}>
      {children}
    </UserContext.Provider>
  );
};