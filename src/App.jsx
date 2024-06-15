import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Orchids from "./pages/Orchids/Orchids";
import OrchidDetail from "./pages/OrchidDetail/OrchidDetail";
import Contact from "./pages/contact/Contact";
// import "./App.css";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Navbar from "./components/Navbar/Navbar";
import useTheme from "./components/useTheme/useTheme";
import About from "./pages/about/About";
import News from "./pages/new/New";
import OrchidModal from "./pages/OrchidModal/OrchidModal";
function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <Router>
        <div className={`App ${theme}`}>
          <Header />
          <Navbar />

          <Button color="inherit" onClick={toggleTheme}>
            Toggle to {theme === "light" ? "Dark" : "Light"} Theme
          </Button>

          <Container>
            <Routes>
              <Route path="/" element={<Orchids />} />
              <Route path="/orchid/:Id" element={<OrchidDetail />} />
              <Route path="/modal/:Id" element={<OrchidModal />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </Container>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
