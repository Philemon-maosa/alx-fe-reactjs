// src/App.jsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

// Create a client instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 className="text-2xl font-bold text-center my-4">
          React Query Demo 🚀
        </h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
