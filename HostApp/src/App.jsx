import React from "react";
import ReactDOM from "react-dom";
import Tab from "./Tab";
import "./index.css";
import { FitnessProvider } from "DataStore/store";
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense("ORg4AjUWIQA/Gnt2VVhiQlFacllJXGNWfFNpR2NbfU51flFGalhRVAciSV9jS3xTf0djWXpacnZXQWhfWA==");

const App = () => (
  <div className="container">
    <React.Suspense fallback="Loading">
      <Tab></Tab>
    </React.Suspense>
  </div>
);
ReactDOM.render(
  <FitnessProvider>
    <App />
  </FitnessProvider>,
  document.getElementById("app")
);
