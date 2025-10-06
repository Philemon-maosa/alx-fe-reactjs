import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Blog Post #{id}</h2>
      <p>This is a dynamic blog page showing post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;
