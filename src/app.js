import React from "react";
import { render } from "react-dom";
/* import Pet from "./Pet"; */
import SearchParams from "./searchparams";

const App = () => {
  return (
    <div>
      <h1>Adobt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
