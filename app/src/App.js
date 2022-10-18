import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Publication from "./pages/Publication";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="mt-2">
        <BrowserRouter>
        <Navigation />
        <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/publication" element={<Publication />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};

export default App;
