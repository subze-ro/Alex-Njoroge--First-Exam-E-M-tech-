import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { useContext } from "react";


const UserTable = ({ users }) => {
  const { deleteUser } = useContext(UserContext);

  
  return (
    <div className="overflow-x-auto">
      <h1 className="mt-2 text-2xl text-blue-600 font-medium">User Data</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.name }</td>
              <td className="py-2 px-4 border-b">{user.email }</td>
              <td className="py-2 px-4 border-b">{user.phone }</td>
              <td className="py-2 px-4 border-b">
              <Link to={`/user/${user.id}`} className="text-blue-600 hover-underline">View Details</Link>
                <button onClick={() => deleteUser(user.id)} className="ml-2 text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable;