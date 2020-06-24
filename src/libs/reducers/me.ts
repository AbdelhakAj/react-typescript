import { getAccessToken } from "libs/functions";

const accessToken = getAccessToken();

const me = (
  state = {
    isLoggedIn: false,
    loading: false,
    accessToken: accessToken,
    data: null,
    error: null,
  },
  action: any
) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, loading: true };

    case "LOGIN_USER_SUCCESS":
      localStorage.setItem("access_token", action.payload.token);
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        accessToken: action.payload.token,
        user: action.payload.data,
      };

    case "LOGIN_USER_FAIL":
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        accessToken: null,
        user: null,
        error: action.payload.error,
      };

    case "LOGOUT_USER":
      localStorage.setItem("access_token", "");
      return { ...state, isLoggedIn: false, accessToken: "", data: null };

    case "GET_ME":
      return { ...state, loading: true };

    case "GET_ME_SUCCESS":
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        data: action.payload,
      };

    case "GET_ME_FAIL":
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default me;
