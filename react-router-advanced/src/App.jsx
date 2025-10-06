// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the App</h1>
      <p>Click below to visit a profile (dynamic route)</p>
      <Link
        to="/profile/1"
        className="text-blue-600 hover:underline mt-4 inline-block"
      >
        Go to Profile #1
      </Link>
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
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dynamic route: /profile/:id */}
        <Route path="/profile/:id" element={<Profile />}>
          {/* Nested routes inside Profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
