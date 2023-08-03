import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";

function App() {
  const isDashboardRoutes = window.location.pathname.startsWith("/");
  return (
    <>
      <Router>
        {!isDashboardRoutes && <Navbar />}
        <Routes>
          <Route exact path="/" element={<Navigate to="/Home" />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
