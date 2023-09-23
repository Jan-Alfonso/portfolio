import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import "./App.css"


function App() {
  const isDashboardRoutes = window.location.pathname.startsWith("/");
  return (
    <>
      <Router>
        {isDashboardRoutes && <Navbar />}
        <div className='gradient_background'></div>
        <Routes>
          <Route exact path="/" element={<Navigate to="/Home" />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/about-me" element={<AboutMe/>} />
          <Route exact path="/portfolio" element={<Portfolio/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
