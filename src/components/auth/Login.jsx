import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Toaster, toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    student_id: "",
    mobile_no: "",
    email: "",
    password: "",
  });

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
    setFormData({
      name: "",
      student_id: "",
      mobile_no: "",
      email: "",
      password: "",
    });
  };

  const handleLogInClick = () => {
    setIsSignUpActive(false);
    setFormData({
      name: "",
      student_id: "",
      mobile_no: "",
      email: "",
      password: "",
    });
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        toast.success("Account successfully created", {
          duration: 1500,
          position: "top-center",
          //icon: "❌",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1800);
      }
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      if (formData.mobile_no !== "" && formData.password !== "") {
        const response = await axios.post(
          "login",
          {
            mobile_no: formData.mobile_no,
            password: formData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          console.log(response.data);
          //toast.success("Login success");
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/home");
        }
      } else {
        console.error("Required fields are empty");
        toast.error("Required fields are empty");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Invalid mobile number or password", {
        duration: 1500,
        position: "top-center",
        //icon: "❌",
      });
    }
  };
  return (
    <React.Fragment>
      <div className="Login-parent-container">
        <div className="container">
          <Toaster className="notifier" />
          <div
            className={
              isSignUpActive ? "container right-panel-active" : "container"
            }
            id="container"
          >
            <div className="form-container sign-up-container">
              <div className="form">
                <h1>Create Account</h1>

                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Student ID"
                  value={formData.student_id}
                  onChange={(e) =>
                    setFormData({ ...formData, student_id: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  value={formData.mobile_no}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile_no: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button onClick={handleSignUp}>Sign Up</button>
              </div>
            </div>
            <div class="form-container sign-in-container">
              <div className="form">
                <h1>Login</h1>
                <input
                  type="text"
                  placeholder="Phone number"
                  value={formData.mobile_no}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile_no: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <a className="forget-password" href="#">
                  Forgot your password?
                </a>
                <button onClick={handleLogin}>Login</button>
              </div>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1>Welcome!</h1>
                  <p>Create an account and start journey with us</p>
                  <p>Already have an account?</p>
                  <button class="ghost" id="signIn" onClick={handleLogInClick}>
                    Login
                  </button>
                </div>
                <div class="overlay-panel overlay-right">
                  <h1>Hello</h1>
                  <p>New here? </p>
                  <button class="ghost" id="signUp" onClick={handleSignUpClick}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>

          <footer></footer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
