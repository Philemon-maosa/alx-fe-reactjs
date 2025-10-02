import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="mx-auto mt-8 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm bg-white rounded-lg shadow-md">
      
      {/* User Avatar */}
      <div className="flex justify-center mb-4">
        <img
          src={user.avatarUrl || "/default-avatar.png"}
          alt={`${user.username}'s avatar`}
          className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover"
        />
      </div>

      {/* User Info */}
      <div className="text-center">
        {/* Heading */}
        <h2 className="text-lg sm:text-lg md:text-xl font-semibold text-gray-800">
          {user.username}
        </h2>

        {/* Paragraph */}
        <p className="text-sm sm:text-sm md:text-base text-gray-600">
          {user.email}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm sm:text-sm md:text-base">
          Edit Profile
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm sm:text-sm md:text-base">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
