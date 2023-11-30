import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SearchParams from "./app/containers/SearchParams";
import Info from "./app/components/Info";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/info/:id" element={<Info />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

// eslint-disable-next-line no-undef

const root = createRoot(document.getElementById("root"));
root.render(<App />);
