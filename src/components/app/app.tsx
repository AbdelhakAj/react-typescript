import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "reducers";

import "./app.scss";

function App() {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1> react with typescript</h1>
      <button onClick={() => dispatch({ type: "INCREMENTBY", payload: 5 })}>
        {count}
      </button>
    </div>
  );
}

export default App;
