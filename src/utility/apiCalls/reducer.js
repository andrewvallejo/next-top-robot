export const reducer = (state, action) => {
  const {type, info: {data, name}} = action
  switch (type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(name));
      localStorage.setItem("token", JSON.stringify(data));
      return {
        ...state,
        isAuthenticated: true,
        user: name,
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