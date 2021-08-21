export const reducer = (state, action) => {
  const {type, info } = action
  switch (type) {
    case "LOGIN":
      localStorage.setItem("token", JSON.stringify(info));
      return {
        ...state,
        isAuthenticated: true,
        token: info
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: ''
      };
      case "AUTOLOGIN": 
        const token = JSON.parse(localStorage.getItem('token'))
        return token ?
         {
          ...state,
          token: token,
          isAuthenticated: true
        } : state
      default:
      return state;
  }
};