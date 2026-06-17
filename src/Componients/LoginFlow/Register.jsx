import React, { useState } from "react";
import { Login_page } from "./Login.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";

const Register = () => {
  const navigate = useNavigate();

  const [showpassword, setShowpassword] = React.useState(false);
  return (
    <Login_page>
      <form className="loginView">
        <div className="login">
          <div>
            <p>Returning User</p>
            <span>
              <span>
                Create your account and get started in just a few steps.
              </span>
              .
            </span>
          </div>
          <div>
            <label htmlFor="email">Full-Name</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="passwords">
            <label htmlFor="password">Password</label>{" "}
            <input
              type={showpassword ? "text" : "password"}
              name="password1"
              id="password1"
            />
            {showpassword ? (
              <span className="eyes">
                <IoEyeOff onClick={() => setShowpassword((prev) => !prev)} />
              </span>
            ) : (
              <span className="eyes">
                <IoMdEye onClick={() => setShowpassword((prev) => !prev)} />
              </span>
            )}
          </div>
          <div className="passwords">
            <label htmlFor="password">Comfirm-Password</label>{" "}
            <input
              type={showpassword ? "text" : "password"}
              name="password2"
              id="password2"
            />
            {showpassword ? (
              <span className="eyes">
                <IoEyeOff onClick={() => setShowpassword((prev) => !prev)} />
              </span>
            ) : (
              <span className="eyes">
                <IoMdEye onClick={() => setShowpassword((prev) => !prev)} />
              </span>
            )}
          </div>

          <div className="checkbox">
            <input type="checkbox" name="" id="" />
            <span>
              Agreed to <a href="">Terms & Condition</a>
            </span>{" "}
          </div>
          <div>
            <button>Register</button>
          </div>
        </div>

        <div className="register">
          <p>Existing User</p>
          <span>Access Your Mission Dashboard</span>
          <span>
            Welcome back, explorer! Log in to track your ongoing research,
            monitor Mars missions in real time, review your collected data, and
            manage your experiment logs. Stay connected with the latest
            discoveries, participate in collaborative projects with fellow
            scientists, and explore new insights about the Red Planet.
          </span>
          <button type="button" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </form>
    </Login_page>
  );
};

export default Register;
