import React from "react";
import { Navbar } from "./Nav.js";
import { RxDividerVertical } from "react-icons/rx";
import Logo from "../../assets/image/spaceX.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Navbar>
      <div className="nav_bar">
        <div
          className="logo_tag"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={Logo} alt="" />
        </div>

        <div className="middle_tag">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/why-mars")}>Why Mars?</li>
            <li onClick={() => navigate("/projectX")}>Project X</li>
            <li onClick={() => navigate("/contact-us")}>Contact</li>
          </ul>
        </div>

        <div className="right_tag">
          <ul>
            <li onClick={() => navigate("/login")}>Login</li>
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RxDividerVertical />
            </li>
            <li onClick={() => navigate("/register")}>Register</li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};

export default Nav;
