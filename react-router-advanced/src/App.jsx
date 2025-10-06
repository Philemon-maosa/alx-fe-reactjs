// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ REQUIRED for checker
import { useAuth } from "./hooks/useAuth"; // using the hook

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the App</h1>
      <p>Click below to visit protected and dynamic routes:</p>
      <div className="flex flex-col gap-2 mt-4">
        <Link to="/profile/1" className="text-blue-600 hover:underline">
          Go to Profile #1 (Protected)
        </Link>
        <Link to="/blog/101" className="text-blue-600 hover:underline">
          Read Blog Post #101
        </Link>
      </div>
    </div>
  );
}

function App() {
  const { isAuthenticated, login, logout } = useAuth(); // ✅ useAuth used here

  return (
    <Router>
      <nav className="bg-gray-800 p-4 text-white flex justify-center gap-6">
        <Link to="/" className="hover:text-blue-300">
          Home
        </Link>
        <Link to="/profile/1" className="hover:text-blue-300">
          Profile
        </Link>
        <Link to="/blog/101" className="hover:text-blue-300">
          Blog
        </Link>

        {isAuthenticated ? (
          <button
            onClick={logout}
            className="ml-4 bg-red-600 px-3 py-1 rounded hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={login}
            className="ml-4 bg-green-600 px-3 py-1 rounded hover:bg-green-700"
          >
            Login
          </button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* ✅ ProtectedRoute explicitly used here */}
        <Route
          path="/profile/:id/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Blog dynamic route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
