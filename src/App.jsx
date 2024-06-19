import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Button, Container } from "@mui/material";
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
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Profile from "./pages/profile/Profile";
import Create from "./pages/crud/Create";

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
                <Route path="/home" element={<Orchids />} />
                <Route path="/login" element={<Login />} />
                <Route path="/orchid/:id" element={<OrchidDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/create" element={<Create />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </Container>

            <Footer />
          </div>
        </Router>
      
    </>
  );
}

export default App;
