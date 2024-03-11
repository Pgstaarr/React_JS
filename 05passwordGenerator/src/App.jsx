import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%&*+-~/|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 16);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="text-2xl font-bold text-center p-5 w-full max-w-3xl mx-auto rounded-lg mt-5 text-white bg-indigo-600">
        Password Generator
        <div className="flex justify-center m-8 font-normal">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none text-base text-black w-80 px-3"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-green-300 hover:bg-green-400 py-2 px-5 text-sm font-semibold text-black"
          >
            Copy
          </button>
        </div>
        <div className="flex justify-center items-center gap-3 my-4">
          <div className="flex items-center justify-center gap-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="px-1 py-2 cursor-grab"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="font-semibold text-lg">Length: {length}</label>
          </div>

          <div className="flex justify-center gap-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label className="font-semibold text-lg">Numbers</label>
          </div>

          <div className="flex justify-center gap-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className="font-semibold text-lg">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
