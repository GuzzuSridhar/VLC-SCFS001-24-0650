import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* navigate to is used to link the end point to another path */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
