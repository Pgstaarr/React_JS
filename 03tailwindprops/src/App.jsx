import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  // let myObj = {
  //   username: "Paras",
  //   age: 21,
  // };

  // let myArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 p-4 mb-4 rounded-xl">Tailwind CSS Test</h1>
      {/* <Card username="Miku" someObj={myObj} someArr={myArr} /> passing props */}
      {/* <Card someArr={myArr} /> */}
      <div className="flex flex-row gap-6">
        <Card username="Paras" btnText="Click me" />
        <Card username="Tanuj" btnText="Visit me" />
        <Card username="Someone" />
      </div>
    </>
  );
}

export default App;
