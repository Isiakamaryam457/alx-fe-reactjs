import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {
  return (
    
    <BrowserRouter>
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Navbar />
     <main style={{flex: 1}}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </main>
    <Footer />
    </div>
    
    </BrowserRouter>
  );
}

export default App;