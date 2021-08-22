export const reducer = (state, action) => {
  const {type, info } = action
  switch (type) {
    case "LOGIN":
      localStorage.setItem("token", JSON.stringify(info.token));
      return {
        ...state,
        isAuthenticated: true,
        isAdmin: info.privledges,
        token: info.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        isAdmin: false,
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