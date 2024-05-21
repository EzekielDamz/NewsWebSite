import { newsContext } from "../context/NewsContext";
import { useContext } from "react";

export const useNewsContext = () => {
  const context = useContext(newsContext);

  if (!context) {
    alert("error .........");
  }
  return context;
};

