// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    minRepos: "",
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username.trim()) return;

    try {
      setLoading(true);
      setError(false);
      setUser(null);

      // For now, we still fetch by username only
      const data = await fetchUserData(formData.username);
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-2xl max-w-lg mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:grid-cols-2"
      >
        {/* Username */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter GitHub username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="e.g. Kenya"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Minimum Repositories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Repositories
          </label>
          <input
            type="number"
            name="minRepos"
            placeholder="e.g. 10"
            value={formData.minRepos}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p className="text-blue-500">Loading...</p>}
        {error && (
          <p className="text-red-500">Looks like we cant find the user</p>
        )}

        {user && (
          <div className="mt-4 border p-4 rounded-lg text-center bg-gray-50">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold">{user.name || user.login}</h3>
            <p className="text-gray-600">login: {user.login}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
