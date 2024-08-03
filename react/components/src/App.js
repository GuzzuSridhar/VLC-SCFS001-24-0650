import ClassComponent from "./components/ClassComponent";
import Greet from "./components/Greet";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <>
      <HelloWorld />
      <Greet />
      {/* the same component can be called any number of times */}
      <HelloWorld />
      {/* calling the class component */}
      <ClassComponent />
    </>
  );
}

export default App;
