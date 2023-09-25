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
import { useState, useEffect } from "react";
import LoadingWrapper from "./components/Spinner/LoadingWrap"


function App() {

  const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 1000);
}, []);

  const isDashboardRoutes = window.location.pathname.startsWith("/");
  return (
    <>
    
      <Router>
        {isDashboardRoutes && <Navbar />}
        <div className='gradient_background'></div>
        <LoadingWrapper>
        <Routes>
          <Route exact path="/" element={<Navigate to="/Home" />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/about-me" element={<AboutMe/>} />
          <Route exact path="/portfolio" element={<Portfolio/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        </LoadingWrapper>
      </Router>
    
    </>
  );
}

export default App;
