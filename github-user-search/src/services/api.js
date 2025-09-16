import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL || "http://localhost:8000/api",
  timeout: 5000,
});

// Example: fetch a random dish from backend
export async function getRandomDish() {
  // If you don't have a backend yet, you can return a fake sample:
  // return { name: "Chapati & Beans", category: "Dinner", ingredients: "Chapati, beans, onions, spices" };

  const res = await api.get("/dishes/random"); // your backend should expose this endpoint
  return res.data;
}

// Fetch all dishes
export async function getDishes() {
  const res = await api.get("/dishes/");
  return res.data;
}

// Create a new dish
export async function createDish(payload) {
  const res = await api.post("/dishes/", payload);
  return res.data;
}

export default api;
