import React, { useState, useEffect } from "react";
import "./Navbar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../../../redux/action";
import { BsBell, BsCart3, BsPersonCircle, BsSearch } from "react-icons/bs";
const Navbar = () => {
  const dispatch = useDispatch();
  const navBarstate = useSelector((state) => state.navbar);
  const navigate = useNavigate();
  const [searchBarClicked, setSearchBarClicked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    student_id: "",
    mobile_no: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (navBarstate.homeClicked) {
      navigate("/home");
    } else if (navBarstate.productsClicked) {
      navigate("/products");
    } else if (navBarstate.eventsClicked) {
      navigate("/events");
    } else if (navBarstate.cartClicked) {
      navigate("/cart");
    } else if (navBarstate.userClicked) {
      navigate("/user");
    }
  }, [navBarstate, navigate]);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    if (storedUserData) {
      setUserData(storedUserData);
    } else {
      navigate("/");
    }
  }, []);

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

  const handleItemClick = (item) => {
    if (!navBarstate[item]) {
      dispatch(setClicked(item, true));
    }
  };

  return (
    <React.Fragment>
      <div id="nav">
        <nav className="navbar" id="navbar">
          <div className="navbar_container">
            <div className="left-nav">
              <a href="#" class="navbar__logo">
                <h2>Schooler</h2>
              </a>
            </div>
            <div className="center-nav">
              <div>
                <div class="cl-effect-5">
                  <a
                    href="#"
                    onClick={() => handleItemClick("homeClicked")}
                    className={navBarstate.homeClicked ? "active_nav" : "nav a"}
                  >
                    <span data-hover="Home">Home</span>
                  </a>
                  <a
                    href="#"
                    onClick={() => handleItemClick("productsClicked")}
                    className={
                      navBarstate.productsClicked ? "active_nav" : "nav a"
                    }
                  >
                    <span data-hover="Products">Products</span>
                  </a>
                  <a
                    href="#"
                    onClick={() => handleItemClick("eventsClicked")}
                    className={
                      navBarstate.eventsClicked ? "active_nav" : "nav a"
                    }
                  >
                    <span data-hover="Events">Events</span>
                  </a>
                </div>
              </div>

              <div class="searchbar-container">
                <input
                  id="searchBar"
                  class="searchbar"
                  type="text"
                  placeholder="Search"
                  onFocus={() => {
                    setSearchBarClicked(true);
                  }}
                  onBlur={() => {
                    setSearchBarClicked(false);
                  }}
                />
                <a
                  id="btnSearch"
                  class={`btn-search ${
                    searchBarClicked ? "visible" : "hidden"
                  }`}
                >
                  <i class="fa fa-search">
                    <BsSearch />
                  </i>
                </a>
              </div>
            </div>
            <div className="right-nav">
              <div className="cl-effect-5">
                <a>
                  <div className="nav_icon">
                    <BsBell />
                  </div>
                </a>

                <a
                  href="#"
                  onClick={() => handleItemClick("cartClicked")}
                  className={navBarstate.cartClicked ? "active_nav" : "nav a"}
                >
                  <div className="nav_icon">
                    <BsCart3 />
                  </div>
                </a>
                <div className="dropdown">
                  <span
                    data-hover="User"
                    className={
                      navBarstate.userClicked
                        ? "active_nav dropBtn"
                        : "nav a dropBtn"
                    }
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleItemClick("userClicked")}
                  >
                    <a href="#" className="nav a">
                      <div className="nav_icon">
                        <BsPersonCircle />
                      </div>
                    </a>
                  </span>
                  <div class="dropdown-menu dropdown-content">
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleItemClick("userClicked")}
                    >
                      My profile
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

/*
<nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="left-buttons">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fa fa-bars"></span> Menu
          </button>
        </div>
        <div className="master-searchbar">
          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav m-auto">
              <li
                className={
                  navBarstate.homeClicked ? "nav-item active" : "nav-item"
                }
              >
                <a
                  href="#"
                  class="nav-link"
                  onClick={() => handleItemClick("homeClicked")}
                >
                  Home
                </a>
              </li>

              <li
                className={
                  navBarstate.productsClicked ? "nav-item active" : "nav-item"
                }
              >
                <a
                  href="#"
                  class="nav-link"
                  onClick={() => handleItemClick("productsClicked")}
                >
                  Products
                </a>
              </li>
              <li
                className={
                  navBarstate.eventsClicked ? "nav-item active" : "nav-item"
                }
              >
                <a
                  href="#"
                  class="nav-link"
                  onClick={() => handleItemClick("eventsClicked")}
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-buttons">
          <ul class="navbar-nav m-auto">
            <li
              className={
                navBarstate.cartClicked ? "nav-item active" : "nav-item"
              }
            >
              <a
                href="#"
                class="nav-link"
                onClick={() => handleItemClick("cartClicked")}
              >
                Cart
              </a>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemClick("userClicked")}
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown04"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                User
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown04">
                <span className="userName">Hi, {userData.name}!</span>
                <a class="dropdown-item" href="#">
                  My profile
                </a>
                <a class="dropdown-item" href="#" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>













const Navbar = ({ userData }) => {
  const dispatch = useDispatch();
  const navBarstate = useSelector((state) => state.navbar);
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

  const handleItemClick = (item) => {
    if (!navBarstate[item]) {
      dispatch(setClicked(item, true));
    }
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="left-buttons">
          <button
            onClick={() => handleItemClick("homeClicked")}
            className={navBarstate.homeClicked ? "button active" : "button"}
          >
            Home
          </button>
          <button
            onClick={() => handleItemClick("productsClicked")}
            className={navBarstate.productsClicked ? "button active" : "button"}
          >
            Products
          </button>
          <button
            onClick={() => handleItemClick("eventsClicked")}
            className={navBarstate.eventsClicked ? "button active" : "button"}
          >
            Events
          </button>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="right-buttons">
          <button
            onClick={() => handleItemClick("cartClicked")}
            className={navBarstate.cartClicked ? "button active" : "button"}
          >
            Cart
          </button>
          <div className="dropdown">
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemClick("userClicked")}
              className={navBarstate.userClicked ? "dropbtn active" : "dropbtn"}
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
*/
export default Navbar;
