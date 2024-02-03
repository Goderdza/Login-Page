import React from "react";
import "../styles/Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    switch (id) {
      case 1:
        navigate("/login");
        break;
      case 2:
        navigate("/register");
        break;
      default:
        console.log('Clicked on an unknown item');
    }
  };

  return (
    <div className="navbar">
      <ul>
        <li className="about">About Us</li>
        <li className="login" onClick={() => handleClick(1)}>
          Login
        </li>
        <li className="register" onClick={() => handleClick(2)}>
          Register
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
