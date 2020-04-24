import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  /*   return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adobt Me!"),
    React.createElement(Pet, {
      name: "Leo",
      animal: "Rabbit",
      breed: "Lionhead",
    }),
    React.createElement(Pet, {
      name: "Ramsey",
      animal: "Dog",
      breed: "Mix",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Rabbit",
      breed: "Lionhead",
    }),
  ]); */

  return (
    <div>
      <h1>Adobt Me!</h1>
      <Pet name="Leo" animal="Rabbit" breed="Lionhead" />
      <Pet name="Ramsey" animal="Dog" breed="Mix" />
      <Pet name="Doink" animal="Rabbit" breed="Lionhead" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
