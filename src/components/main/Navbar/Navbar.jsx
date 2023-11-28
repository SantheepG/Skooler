import React, { useState } from "react";
import "./Navbar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = ({ userData }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post("logout", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        console.log("logged out");
        localStorage.clear();
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="left-buttons">
          <button>Home</button>
          <button>Products</button>
          <button>Events</button>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="right-buttons">
          <button>Cart</button>
          <div className="dropdown">
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="dropbtn"
            >
              User
            </button>
            {showDropdown && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="dropdown-content"
              >
                <span className="userName">Hi, {userData.name}!</span>
                <button>Profile</button>
                <button>Settings</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
