import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Login";
import Login from "./pages/Register";


import Preloader from "./components/PreLoader";
import "./App.css";
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Donate from "./pages/Donate";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    
   


    <Router>
      <Preloader load={load} />
      
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  

   
  );
}

export default App;
