import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div>
      {console.log(items.length)}
      {items.map((i) => {
        return (
          // <pre>{JSON.stringify(i)}</pre>;
          <p>
            {i.id} - {i.title}
          </p>
        );
      })}
    </div>
  );
}

export default App;
