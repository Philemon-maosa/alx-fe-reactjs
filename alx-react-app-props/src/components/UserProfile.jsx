import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function UserProfile() {
  // consume context
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
      <p>Status: {userData.loggedIn ? "Online" : "Offline"}</p>
    </div>
  );
}

export default UserProfile;
