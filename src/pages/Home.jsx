import React from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";

const Home = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <span>{currentUser?.email}</span>
    </div>
  );
};

export default Home;
