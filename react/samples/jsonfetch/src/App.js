import { useState } from "react";
import FetchData from "./FetchData";
import "../src/styles.css";

function App() {
  const [resourceType, setResourceType] = useState("");

  return (
    <div className="centerhead">
      <div>
        <button className="buttonmain" onClick={() => setResourceType("posts")}>
          Posts
        </button>
        <button className="buttonmain" onClick={() => setResourceType("todos")}>
          To-Do's
        </button>
        <button
          className="buttonmain"
          onClick={() => setResourceType("comments")}
        >
          Comments
        </button>
      </div>

      <h1>{resourceType}</h1>
      <FetchData resource={resourceType} />
    </div>
  );
}

export default App;
