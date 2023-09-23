import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";


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
