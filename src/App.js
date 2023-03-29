import './App.css';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil'
import { countState } from "./atoms"

function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useRecoilState(countState)
  return (
    <div className="Container">
      <h1 className="Heading1">Counter</h1>
      <h2>{count}</h2>
      <div className="ButtonContainer">
        <button className="IncButton" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="DecButton" onClick={() => setCount(count - 1)} disabled={count === 0}>
          Decrement
        </button>
        <button className="ResButton" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;