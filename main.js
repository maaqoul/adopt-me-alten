const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};
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

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
