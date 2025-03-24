import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import UserTable from '../components/UserTable';
import SearchBar from '../components/SearchBar';
import UserForm from '../components/UserForm';

const Dashboard = () => {
  const { users, addUser } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold text-blue-600 mb-4">Dashboard</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <UserForm addUser={addUser} />
      <UserTable users={filteredUsers} />
    </div>
  );
};

export default Dashboard;