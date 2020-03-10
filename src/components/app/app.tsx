import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash";

import { RootState } from "libs/reducers";

import "./app.scss";

function App() {
  const count = useSelector((state: RootState) => state.count);
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  return (
    <div className="app">
      {users.loading ? (
        <p>loading ...</p>
      ) : (
        <>
          <h1> react with typescript</h1>
          <button onClick={() => dispatch({ type: "INCREMENTBY", payload: 5 })}>
            {count}
          </button>
          <button onClick={() => dispatch({ type: "GETUSERS" })}>click</button>
          <ul>
            {get(users, "data.data", []).map(
              ({ employee_name }: { employee_name: string }) => (
                <li>{employee_name}</li>
              )
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
