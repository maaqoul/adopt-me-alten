import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

// eslint-disable-next-line no-undef

const root = createRoot(document.getElementById("root"));
root.render(<App />);
