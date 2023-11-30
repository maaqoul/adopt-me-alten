import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import SearchParams from "./app/containers/SearchParams";
import Info from "./app/components/Info";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt me!</Link>
      </header>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
};

// eslint-disable-next-line no-undef

const root = createRoot(document.getElementById("root"));
root.render(<App />);
