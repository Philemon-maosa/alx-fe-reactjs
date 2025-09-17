import { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
      setUsername("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ flex: 1, padding: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>
        Search
      </button>
    </form>
  );
}

export default Search;
