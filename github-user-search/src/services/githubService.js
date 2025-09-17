import axios from "axios";

export async function fetchUserData(query) {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data.items; // <-- array of users
  } catch (error) {
    throw error;
  }
}
