import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Activities from "./pages/Activities";
import Membership from "./pages/membership/Membership";
import Contact from "./pages/ContactUs";
import Register from "./pages/membership/Register";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/membership/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
