import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash";

import { RootState } from "libs/reducers";
import Auth from "components/auth/auth";
import { getAccessToken } from "libs/functions";

import "./app.scss";

function App() {
  const users = useSelector((state: RootState) => state.users);
  const me = useSelector((state: RootState) => state.me);
  const dispatch = useDispatch();
  const accessToken = getAccessToken();

  useEffect(() => {
    if (accessToken) {
      dispatch({
        type: "GET_ME",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      {users.loading ? (
        <p>loading ...</p>
      ) : (
        <>
          <h1> react with typescript</h1>
          <button onClick={() => dispatch({ type: "GET_USERS" })}>click</button>
          <ul>
            {get(users, "data", []).map(
              ({ firstName }: { firstName: string }) => (
                <li>{firstName}</li>
              )
            )}
          </ul>

          <Auth />
        </>
      )}
    </div>
  );
}

export default App;
