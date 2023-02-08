import React from "react";
import { Routes,BrowserRouter, Route, Navigate } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Training from "./components/Training";


function App() {
  return (
    <div className="App"> 
    <BrowserRouter> 
      <Routes>
        <Route path="/"         element={<Home/>} />
        <Route path="/pricing"  element={<Pricing/>} />
        <Route path="/training" element={<Training/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path='*'         element={<Navigate to="/" />}/>
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
