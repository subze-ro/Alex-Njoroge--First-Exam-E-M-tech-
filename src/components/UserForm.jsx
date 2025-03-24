import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addUser } = useContext(UserContext);

  const onSubmit = (data) => {
    addUser(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          {...register('name', { required: true })}
          placeholder="Name"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          {...register('email', { required: true })}
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          {...register('phone', { required: true })}
          placeholder="Phone"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          {...register('address.street', { required: true })}
          placeholder="Street"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          {...register('address.suite', { required: true })}
          placeholder="Suite"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          {...register('address.city', { required: true })}
          placeholder="City"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          {...register('address.zipcode', { required: true })}
          placeholder="Zipcode"
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="mt-4 bg-blue-600 text-white p-2 rounded">Add User</button>
    </form>
  );
};

export default UserForm;