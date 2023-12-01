import React, { useState, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AdoptedPetContext from "./context/AdoptPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true,
    },
  },
});

const Info = lazy(() => import("./app/components/Info"));
const SearchParams = lazy(() => import("./app/containers/SearchParams"));

const App = () => {
  const adoptedPet = useState(null);
  return (
    <div
      className="p-0 m-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)",
      }}
    >
      <BrowserRouter>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <QueryClientProvider client={queryClient}>
            <Suspense
              fallback={
                <div className="loading-pane">
                  <h2 className="loader">⌛</h2>
                </div>
              }
            >
              <header>
                <Link to="/">Adopt me!</Link>
              </header>
              <Routes>
                <Route path="/" element={<SearchParams />} />
                <Route path="/info/:id" element={<Info />} />
              </Routes>
            </Suspense>
          </QueryClientProvider>
        </AdoptedPetContext.Provider>
      </BrowserRouter>
    </div>
  );
};

// eslint-disable-next-line no-undef

const root = createRoot(document.getElementById("root"));
root.render(<App />);
