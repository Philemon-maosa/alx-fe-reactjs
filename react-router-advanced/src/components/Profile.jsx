import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Profile = () => {
  // ✅ Dynamic part of the route (e.g., /profile/123)
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Profile {id && `#${id}`}</h2>

      {/* Navigation for nested routes */}
      <nav className="flex gap-4 mb-6">
        <Link to="details" className="text-blue-600 hover:underline">
          Profile Details
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Profile Settings
        </Link>
      </nav>

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
};

export default Profile;
