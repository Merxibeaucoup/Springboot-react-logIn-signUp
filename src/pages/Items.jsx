import React from "react";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <div>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Items;
