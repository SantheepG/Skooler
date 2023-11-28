import React, { useState, useEffect } from "react";
import "./Main.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useSelector } from "react-redux";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Events from "./Events/Events";
import Cart from "./Cart/Cart";
import User from "./User/User";

const Main = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const [userData, setUserData] = useState({
    name: "",
    student_id: "",
    mobile_no: "",
    email: "",
    password: "",
  });

  let componentToRender;

  if (state.homeClicked) {
    componentToRender = <Home />;
  } else if (state.productsClicked) {
    componentToRender = <Products />;
  } else if (state.eventsClicked) {
    componentToRender = <Events />;
  } else if (state.cartClicked) {
    componentToRender = <Cart />;
  } else if (state.userClicked) {
    componentToRender = <User />;
  }

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    if (storedUserData) {
      setUserData(storedUserData);
    } else {
      navigate("/");
    }
  }, [navigate]);

  /*useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .get("user", config)
      .then((res) => {
        console.log(res);
        const data = JSON.parse(localStorage.getItem("user"));
        if (data) {
          setUserData({
            name: data.name,
            student_id: data.student_id,
            mobile_no: data.mobile_no,
            email: data.email,
            password: data.password,
          });
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [navigate]); */

  return (
    <React.Fragment>
      {userData === null ? (
        navigate("/")
      ) : (
        <div className="main-container">
          <div className="navbar">
            <Navbar userData={userData} />
          </div>
          <div className="content">{componentToRender}</div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Main;
