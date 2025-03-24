import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserDetails = () => {
  const { userId } = useParams();
  const { users } = useContext(UserContext);
  const user = users.find(user => user.id === parseInt(userId));

  if (!user) {
    return <div className="flex items-center justify-center h-screen text-red-500 text-xl">User not found</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="w-3/4 max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">User Details</h1>
        <div className="space-y-4 text-lg">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;