import { createContext } from "react";

export const AuhtContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null
});

export function AuthProvider(props) {
  const { children } = props;
  const valueContext = {
    auth: null,
    login: () => console.log("Login OK"),
    logout: () => console.log("Cerrar Sesion")
  };
  return (
    <AuhtContext.Provider value={valueContext}>{children}</AuhtContext.Provider>
  );
}
