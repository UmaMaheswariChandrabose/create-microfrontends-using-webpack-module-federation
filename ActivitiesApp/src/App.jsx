import React from "react";
import ReactDOM from "react-dom";

import Activities from "./Activities";
import "./index.css";
import { FitnessProvider } from "DataStore/store";

const App = () => (
  <FitnessProvider>
      <div className="container">
        <Activities></Activities>
      </div>
    </FitnessProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
