import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Modal from "react-modal";
import "./index.css";
import { NewsContextProvider } from "./context/NewsContext.jsx";
// import { NewContextProvider } from "./context/NewsContext";

Modal.setAppElement("#root");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewsContextProvider>
      <App />
    </NewsContextProvider>
  </React.StrictMode>
);
