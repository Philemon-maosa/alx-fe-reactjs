import axios from "axios";

/**
 * Fetch GitHub users based on query, location, and minRepos.
 * @param {string} query - The main search term (username, keyword, etc.)
 * @param {string} location - Filter by location (optional)
 * @param {number} minRepos - Minimum number of repositories (optional)
 */
export async function fetchUserData(query, location = "", minRepos = 0) {
  try {
    let searchQuery = query;

    if (location) {
      searchQuery += ` location:${location}`;
    }

    if (minRepos > 0) {
      searchQuery += ` repos:>${minRepos}`;
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`
    );

    return response.data.items; // array of users
  } catch (error) {
    throw error;
  }
}
