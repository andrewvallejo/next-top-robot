export const reducer = (state, action) => {
  const {type, info: { data }} = action
  switch (type) {
    case "LOGIN":
      localStorage.setItem("token", JSON.stringify(data));
      return {
        ...state,
        isAuthenticated: true,
        token: data
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: ''
      };
    default:
      return state;
  }
};