import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com/users/";

// Function to fetch user data
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error; // rethrow so component can handle error
  }
}
