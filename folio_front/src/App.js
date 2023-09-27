import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import "./App.css"
import LoadingWrapper from "./components/Spinner/LoadingWrap"


function App() {

  const isDashboardRoutes = window.location.pathname.startsWith("/");

  return (
    <>
    
      <Router>
        {isDashboardRoutes && <Navbar />}
        
        <LoadingWrapper>
        <Routes>
          <Route exact path="/" element={<Navigate to="/Home" />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/portfolio" element={<Portfolio/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        </LoadingWrapper>
      </Router>
    
    </>
  );
}

export default App;
