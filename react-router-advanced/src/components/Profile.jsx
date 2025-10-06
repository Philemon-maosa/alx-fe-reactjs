// src/components/Profile.jsx
import React from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Profile {id && `#${id}`}</h2>

      {/* Nested navigation */}
      <nav className="flex gap-4 mb-6">
        <Link to={`details`} className="text-blue-600 hover:underline">
          Profile Details
        </Link>
        <Link to={`settings`} className="text-blue-600 hover:underline">
          Profile Settings
        </Link>
      </nav>

      {/* ✅ Nested routes defined here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
