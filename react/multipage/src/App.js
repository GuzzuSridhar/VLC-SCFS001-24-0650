import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import Contact from "./components/Contact";
// import AboutUs from "./components/AboutUs";

// Not Loading the components on the page load (initial load),
// these components will be imported on the first call
// this will reduce the initial page load time
const HomePage = lazy(() => import("./components/HomePage"));
const Contact = lazy(() => import("./components/Contact"));
const AboutUs = lazy(() => import("./components/AboutUs"));

function App() {
  return (
    <BrowserRouter>
      {/* Suspense is used to load the component on the first use and the fa */}
      <Suspense fallback={<div> Loading...........</div>}>
        <Routes>
          {/* navigate to is used to link the end point to another path */}

          {/* the "/" end point is also referred to as root or default route */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
