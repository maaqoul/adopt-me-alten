import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      animal: "cat",
      name: "micho",
      breed: "seamois",
    }),
    React.createElement(Pet, {
      animal: "dog",
      name: "rex",
      breed: "labrador",
    }),
    React.createElement(Pet, {
      animal: "bird",
      name: "picho",
      breed: "canard",
    })
  );
};

// eslint-disable-next-line no-undef
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
