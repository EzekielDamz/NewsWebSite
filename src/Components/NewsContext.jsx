// import React from 'react'
import { createContext, useState } from "react";

export const newsContext = createContext();

export const NewsContextProvider = ({ childern }) => {
  const [stateData, setStateData] = useState({});
  return (
      <newsContext.Provider value={{ stateData, setStateData }}>
      {childern}
    </newsContext.Provider>
  );
};


