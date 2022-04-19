import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: "",
  login: () => {},
});

export function AuthContextProvider(props) {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = React.useState(initialToken);

  const isLoggedIn = !!token;

  function loginHandler(token) {
    localStorage.setItem("token", token);
    setToken(token);
  }

  const contextValue = {
    isLoggedIn: isLoggedIn,
    token: token,
    login: loginHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
