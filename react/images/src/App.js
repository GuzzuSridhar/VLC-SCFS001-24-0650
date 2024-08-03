import { DummyIm } from "./components/DummyImage";
import RandomImage from "./components/Picsum";
import ShowImages from "./components/ShowImages";
import "./components/Styles.css";

function App() {
  return (
    <div>
      <ShowImages />
      <RandomImage width={400} height={300} />
      <DummyIm />
    </div>
  );
}

export default App;
