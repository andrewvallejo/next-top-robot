export const reducer = (state, action) => {
  const {type, info } = action
  switch (type) {
    case "LOGIN":
      localStorage.setItem("isAdmin", JSON.stringify(info.privledges))
      localStorage.setItem("token", JSON.stringify(info.token))
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
      const isAdmin = JSON.parse(localStorage.getItem('isAdmin'))
      return token ?
        {
        ...state,
        token: token,
        isAdmin: isAdmin,
        isAuthenticated: true
      } : state
    default:
    return state
  }
};