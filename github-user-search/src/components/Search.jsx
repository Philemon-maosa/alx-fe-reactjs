// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // now included here

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    try {
      setLoading(true);
      setError(false);
      setUser(null);

      const data = await fetchUserData(username); // <-- directly using it here
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }

    setUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit" style={{ padding: "8px 12px" }}>
          Search
        </button>
      </form>

      {/* Required outputs */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Looks like we cant find the user</p>}

      {user && (
        <div style={{ marginTop: 16, border: "1px solid #ddd", padding: 12 }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: 96, height: 96, borderRadius: "50%" }}
          />
          <h3>{user.name || user.login}</h3>
          <p>login: {user.login}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
