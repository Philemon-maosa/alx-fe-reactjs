// src/components/ProfilePage.jsx
import UserInfo from './UserInfo';

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      {/* No more userData prop */}
      <UserInfo />
    </div>
  );
};

export default ProfilePage;
