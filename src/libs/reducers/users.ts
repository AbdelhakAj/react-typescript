const users = (state = { loading: false, data: [] }, action: any) => {
  switch (action.type) {
    case "GET_USERS":
      return { loading: true };

    case "GET_USERS_SUCCESS":
      return { ...state, loading: false, data: action.payload };

    case "GET_USERS_FAIL":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default users;
