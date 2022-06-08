import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Header from "../src/components/Header";
import About from "../src/components/About";
import ItemPage from "../src/components/ItemPage";
import Home from "./components/Home";

function App() {
  return (
    <div className=".app"> 
      <Header />
      <Routes>
        {/* <Route path="header" element={<Header />} /> */}
        <Route path="/" element={ <Home />}/>
        <Route path="treats" element={<ItemPage />}/>
        <Route path="about" element={<About />}/>
      </Routes>
      </div>
          )
  }

export default App;
