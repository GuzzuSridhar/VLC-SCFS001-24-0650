// import Image from "next/image";
// import styles from "./page.module.css";

import Link from "next/link";
import MyComponent from "./MyComponent";

export default function Home() {
  return (
    <main>
      <h2>Welcome to Next Js</h2>
      {console.log("Hello")}

      <input type="text" />
      <input type="text" />
      <button onClick={() => console.log("Client")}>Click</button>

      {/* <MyComponent /> */}
      <Link href="/new">new</Link>
    </main>
  );
}
