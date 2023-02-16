import React from "react";
import Navbar from "./Navbar/navbar"
import Intro from "./Page/Intro";
import Main from "./Page/Main";
import Shop from "./Page/Buying";
import Footer from "./Footer/footer";
import Pay from "./Component/Pay";
import "./navbar.css";
import {Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       < Navbar/>
       <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/Pay" element={<Pay/>} />
        <Route path="/:type" element={<Main/>} />
        <Route path="/:type/:page" element={<Main/>} />
        <Route path="/:type/:page/:id" element={<Shop/>} />
         </Routes>
      <Footer/>
    </div>
  );
}

export default App;