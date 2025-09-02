// src/components/UserDetails.jsx
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const UserDetails = () => {
  // consume context instead of props
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Status:</strong> {userData.loggedIn ? "Online" : "Offline"}</p>
    </div>
  );
};

export default UserDetails;
