// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Blog Post #{id}</h2>
      <p className="text-gray-700">
        This is the detailed view of blog post with ID: <strong>{id}</strong>.
      </p>
    </div>
  );
};

export default BlogPost;
