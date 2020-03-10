const count = (state = 0, action: any) => {
  switch (action.type) {
    case "INCREMENTBY":
      return state + action.payload;

    default:
      return state;
  }
};

export default count;
