import Ternary from "./Ternary";
import IfElse from "./IfElse";
import "./Styles.css";
import SwitchCase from "./SwitchCase";

function App() {
  return (
    <div>
      <h1>Usage of the ternary operator</h1>
      <Ternary salary={7500} />
      <hr />
      <h1>Usage of If Else Statement</h1>
      <IfElse salary={1500} />
      <hr />
      <h1>Usage of Switch Statement</h1>
      <SwitchCase salary={100} />
    </div>
  );
}

export default App;
