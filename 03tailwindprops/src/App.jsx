import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-blue-500 text-white p-4 rounded-2xl">Tailwind test</h1>
      <Card channel="chaiAurCode" someObj={{ name: "John Doe", age: 20 }} />
    </>
  );
}

export default App;
