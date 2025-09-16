import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h2>404 - Not Found</h2>
    <p>
      Go back <Link to="/">home</Link>.
    </p>
  </div>
);

export default NotFound;
