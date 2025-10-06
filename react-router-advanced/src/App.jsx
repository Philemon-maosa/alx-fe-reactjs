// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost"; // ✅ Add this import

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the App</h1>
      <p>Click below to visit a profile or a blog (dynamic routes)</p>
      <div className="flex flex-col gap-2 mt-4">
        <Link to="/profile/1" className="text-blue-600 hover:underline">
          Go to Profile #1
        </Link>
        <Link to="/blog/101" className="text-blue-600 hover:underline">
          Read Blog Post #101
        </Link>
      </div>
    </div>
  );
}

function App() {
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
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dynamic route: /profile/:id */}
        <Route path="/profile/:id" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* ✅ Dynamic route: /blog/:id */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
