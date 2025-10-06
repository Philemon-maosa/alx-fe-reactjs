// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

// Example fetch function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const PostsComponent = () => {
  // useQuery hook
  const { data, isLoading, isError, error } = useQuery("posts", fetchPosts);

  if (isLoading) return <p className="text-center">Loading posts...</p>;
  if (isError) return <p className="text-red-500 text-center">{error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-6">
      {data.slice(0, 10).map((post) => (
        <div
          key={post.id}
          className="p-4 mb-3 border rounded-lg shadow hover:bg-gray-50 transition"
        >
          <h3 className="font-semibold text-lg">{post.title}</h3>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
