// src/components/UserInfo.jsx
import UserDetails from './UserDetails';

const UserInfo = () => {
  return (
    <div>
      <h2>User Info</h2>
      {/* No more userData prop */}
      <UserDetails />
    </div>
  );
};

export default UserInfo;
