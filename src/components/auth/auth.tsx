import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "libs/reducers";

import "./auth.scss";

function Auth() {
  const me = useSelector((state: RootState) => state.me);
  const dispatch = useDispatch();

  const handleLogging = () => {
    if (me.isLoggedIn) {
      dispatch({
        type: "LOGOUT_USER",
      });
    } else {
      dispatch({
        type: "LOGIN_USER",
        payload: {
          email: "test@testing.com",
          password: "111111",
        },
      });
    }
  };

  return (
    <div className="auth">
      <button onClick={handleLogging}>
        {me.loading ? "loading..." : me.isLoggedIn ? "LOGOUT" : "LOGIN"}
      </button>
    </div>
  );
}

export default Auth;
