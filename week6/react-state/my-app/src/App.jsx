import React, { useState } from "react";
import Hudini from "../components/Hudini";
import Landing from "../components/Landing";
import Home from "../components/Home";

function App() {
  const [state, setState] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: true,
    currentPage: "Landing"
  });

  return (
    <div className="App">
      <h2>Exercise 1</h2>
      <Hudini />

      <h2>Exercise 2 + 3</h2>
      <div>
        <button onClick={() => setState({ ...state, currentPage: "Landing" })}>Go to Landing</button>
        <button onClick={() => setState({ ...state, currentPage: "Home" })}>Go to Home</button>
      </div>
      {state.currentPage === "Landing" ? (
        <Landing user={state.user} store={state.store} />
      ) : (
        <Home store={state.store} shouldDiscount={state.shouldDiscount} />
      )}
    </div>
  );
}

export default App;