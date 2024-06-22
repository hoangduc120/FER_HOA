// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Orchids from "./pages/Orchids/Orchids";
import OrchidDetail from "./pages/OrchidDetail/OrchidDetail";
import Contact from "./pages/contact/Contact";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/about/About";
import News from "./pages/new/New";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Profile from "./pages/profile/Profile";
import Create from "./pages/crud/Create";
import Update from "./pages/crud/Update";
import LoginGG from "./pages/login/LoginGG";
import { useAuth } from "./components/context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
        <Header />
        <Navbar />
        <br />
      <Container>
        <Routes>
          <Route path="/" element={<Orchids />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orchid/:id" element={<OrchidDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/admin" element={user ? <Admin /> : <LoginGG />} />{" "}
          {/* Điều kiện chuyển hướng */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/loginGG" element={<LoginGG />} />
        </Routes>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
