import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import RegisterPage from "./components/Resgister";
import "./components/Styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
