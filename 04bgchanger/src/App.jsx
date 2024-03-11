import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex p-3 justify-evenly rounded-3xl bg-blue-200">
          {/* <div className="flex gap-8"> */}
          <button
            className="rounded-3xl outline-none px-6 py-2 bg-red-600 text-white font-bold"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="rounded-3xl outline-none px-6 py-2 bg-green-600 text-white font-bold"
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="rounded-3xl outline-none px-6 py-2 bg-blue-600 text-white font-bold"
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="rounded-3xl outline-none px-6 py-2 bg-yellow-300 text-white font-bold"
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="rounded-3xl outline-none px-6 py-2 bg-orange-600 text-white font-bold"
            onClick={() => {
              setColor("orange");
            }}
          >
            Orange
          </button>
          <button
            className="rounded-3xl outline px-6 py-2 bg-gray-400 text-black font-bold"
            onClick={() => {
              setColor("grey");
            }}
          >
            Grey
          </button>
          <button
            className="rounded-3xl outline px-6 py-2 bg-black text-white font-bold"
            onClick={() => {
              setColor("black");
            }}
          >
            Black
          </button>
          <button
            className="rounded-3xl outline px-6 py-2 bg-white text-black font-bold"
            onClick={() => {
              setColor("white");
            }}
          >
            White
          </button>
          <button
            className="rounded-3xl outline-none px-6 py-2 bg-purple-600 text-white font-bold"
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
