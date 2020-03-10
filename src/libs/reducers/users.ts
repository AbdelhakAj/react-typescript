const users = (state = [], action: any) => {
  switch (action.type) {
    case "GETUSERS":
      return { error: false, loading: true };

    case "GETDATASUCCESS":
      return { error: false, loading: false, data: action.payload.data };

    case "GETDATAFAIL":
      return {
        error: true,
        errorMessage: action.payload.error,
        loading: false,
        data: action.payload.data
      };

    default:
      return state;
  }
};

export default users;
