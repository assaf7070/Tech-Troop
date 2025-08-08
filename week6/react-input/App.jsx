import React, { useState } from "react";
import Exercise1 from "../Exercise1";
import Exercise2 from "../Exercise2";

function App() {
  return (
    <div className="App" style={{ padding: 20 }}>
      <h2>React Exercises</h2>

      <div className="ex-space">
        <h3>Exercise 1</h3>
        <Exercise1 />
      </div>
      <div className="ex-space">
        <h3>Exercise 2</h3>
        <Exercise2 />
      </div>
    </div>
  );
}

export default App;