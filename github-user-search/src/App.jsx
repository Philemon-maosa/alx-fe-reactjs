import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Suggestions from "./components/Suggestions.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
        <Header />
        <main style={{ marginTop: 20 }}>
<h1 className="text-3xl font-bold text-blue-600">
  Tailwind is working! 🎉
</h1>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
