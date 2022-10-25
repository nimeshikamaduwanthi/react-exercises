import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MovieProvider } from "./contexts/movies/movies.context";
import App from "./App";

const container = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </StrictMode>
);
