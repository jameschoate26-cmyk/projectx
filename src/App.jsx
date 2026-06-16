import { useState } from "react";
import "./App.css";
import Nav from "./Componients/Header/Nav.jsx";
import Homepage from "./Componients/Homepage/Homepage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Componients/Footer/Footer.jsx";
import Login from "./Componients/LoginFlow/Login.jsx";
import Register from "./Componients/LoginFlow/Register.jsx";
import Mars from "./Componients/WhyMars/Whymars.jsx";
import ContactUs from "./Componients/Contact/Contact.jsx";
import ScrollToTopOnClick from "./AutoscrollTop.jsx";
import ProjectX from "./Componients/ProjectX/Projectx.jsx";

function App() {
  return (
    <>
      <ScrollToTopOnClick />
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/why-mars" element={<Mars />} />
        <Route path="/projectX" element={<ProjectX />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
