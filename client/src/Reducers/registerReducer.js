export const registerInitialState = {
  loading: false,
  user: null,
  error: null,
};

export const registerReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_START":
      return { ...state, loading: true, error: null };
    case "REGISTER_SUCCESS":
      return { ...state, loading: false, user: action.payload };
    case "REGISTER_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
