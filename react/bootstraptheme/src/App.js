import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  const [darkmode, setDarkMode] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    if (darkmode) {
      target.current.classList.add("bg-dark", "text-light");
    } else {
      target.current.classList.remove("bg-dark", "text-light");
    }
  }, [darkmode]);

  return (
    <div>
      <ThemeSwitch darkmode={darkmode} setDarkmode={setDarkMode} />
      <div ref={target}>
        <h1>Theme Switch Demo</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
          deserunt inventore tenetur, quos provident eum reiciendis aspernatur
          quas error modi aliquid laudantium est, sunt voluptatum. Dignissimos
          ad dolorum tempora illum.
        </p>
      </div>
    </div>
  );
}

export default App;
