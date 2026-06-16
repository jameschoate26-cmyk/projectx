import React, { useState } from "react";
import { Login_page } from "./Login.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";

const Login = () => {
  const navigate = useNavigate();

  const [showpassword, setShowpassword] = React.useState(false);
  return (
    <Login_page>
      <form className="loginView">
        <div className="login">
          <div>
            <p>Returning User</p>
            <span>Welcome back. Please enter your login details.</span>
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="passwords">
            <label htmlFor="password">Password</label>{" "}
            <input
              type={showpassword ? "text" : "password"}
              name="password"
              id="password"
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
            <span>Remember me</span>{" "}
          </div>
          <Link>Forget Password</Link>
          <div>
            <button>Login</button>
          </div>
        </div>

        <div className="register">
          <p>New Member</p>
          <span>Create Your Explorer Account</span>
          <span>
            Join our Mars exploration community! Register to access mission
            data, contribute to ongoing research, collaborate with fellow
            scientists, and stay updated on the latest discoveries about the Red
            Planet. Start your journey to explore, learn, and make an impact in
            the world of planetary science.
          </span>
          <button type="button" onClick={() => navigate("/register")}>
            Register Account
          </button>
        </div>
      </form>
    </Login_page>
  );
};

export default Login;
