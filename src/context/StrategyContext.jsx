import { createContext, useState } from "react";

export const StrategyContext = createContext();

export const StrategyContextProvider = ({ children }) => {
  const { Provider } = StrategyContext;
  const [strategy, setStrategy] = useState([]);

  const value = {
    strategy,
    setStrategy,
  };
  return <Provider value={value}>{children}</Provider>;
};
