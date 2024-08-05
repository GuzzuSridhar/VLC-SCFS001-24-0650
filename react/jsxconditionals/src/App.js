import Ternary from "./Ternary";
import IfElse from "./IfElse";
import "./Styles.css";

function App() {
  return (
    <div>
      <h1>Usage of the ternary operator</h1>
      <Ternary salary={7500} />
      <hr />
      <h1>Usage of If Else Statement</h1>
      <IfElse salary={1500} />
    </div>
  );
}

export default App;
