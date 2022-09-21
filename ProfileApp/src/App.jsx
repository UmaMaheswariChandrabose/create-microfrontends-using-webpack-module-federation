import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
import { FitnessProvider } from "DataStore/store";

import "./index.css";

const App = () => (
  <FitnessProvider>
      <Profile></Profile>
    </FitnessProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
