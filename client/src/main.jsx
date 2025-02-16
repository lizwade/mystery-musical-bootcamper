import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";
import PianoDropdown from "./components/PianoDropdown.jsx";
import Header from "./components/Header/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <PianoDropdown />
  </StrictMode>
);
