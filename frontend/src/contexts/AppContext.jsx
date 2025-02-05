import { createContext } from "react";

// Create context
export const AppContext = createContext();

// The provider component should have the correct name and return the context provider with a value
export const AppContextProvider = ({ children }) => {
  // Add meaningful values here
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
