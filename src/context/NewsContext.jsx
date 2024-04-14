import { createContext, useState, useContext } from "react";

export const NewsContext = createContext();

export const useNewsContext = () => {
  return useContext(NewsContext);
};

export const NewsContextProvider = ({ children }) => {
  const [stateData, setStateData] = useState([]);
  const [stateNews, setStateNews] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  return (
    <NewsContext.Provider
      value={{
        stateData,
        setStateData,
        stateNews,
        setStateNews,
        displayData,
        setDisplayData,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
