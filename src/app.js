import React from "react";
import { render } from "react-dom";
/* import Pet from "./Pet"; */
import SearchParams from "./searchparams";
import SearhParams from "./searchparams";

const App = () => {
  return (
    <div>
      <h1>Adobt Me!</h1>
      <SearhParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
