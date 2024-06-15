import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Orchids from "./pages/Orchids/Orchids";
import OrchidDetail from "./pages/OrchidDetail/OrchidDetail";
import Contact from "./pages/contact/Contact";
import "./App.css";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Navbar/>
          <Routes>
            <Route path="/" element={<Orchids />} />

            <Route path="/orchid/:Id" element={<OrchidDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
