// src/components/Home.jsx
import React, { useState } from "react";
import Search from "./Search";
import { fetchUserData } from "../services/githubService";

function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); // boolean works fine

  const handleSearch = async (username) => {
    try {
      setError(false);
      setLoading(true);
      setUser(null);

      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError(true); // Search.jsx will show: "Looks like we cant find the user"
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Finder</h1>
      <Search onSearch={handleSearch} user={user} loading={loading} error={error} />
    </div>
  );
}

export default Home;
