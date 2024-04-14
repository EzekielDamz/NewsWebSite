import { newsContext } from "../context/NewsContext";
import { useContext } from "react";

export const UseNewsContext = () => {
  const context = useContext(newsContext);

  if (!context) {
    console.log("error .........");
  }
  return context;
};

