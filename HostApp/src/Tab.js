import React from "react";
import { load } from "web-component-load";
import { TabComponent } from "@syncfusion/ej2-react-navigations";
import { useFitness } from "DataStore/store";

const Activities = React.lazy(() => import("Activities/Activities"));

export default function Tab() {
  const { fitnessData } = useFitness();

  React.useEffect(() => {
    load("http://localhost:4200");
  }, []);

  document.addEventListener(
    "angular-input-event",
    function (e) {
      fitnessData.changeCalories(e.detail);
    },
    { capture: true }
  );

  const tabHeader = [
    { text: "ACTIVITIES", iconCss: "icon-Activities", iconPosition: "top" },
    { text: "DIET", iconCss: "icon-Diet", iconPosition: "top" },
    { text: "FASTING", iconCss: "icon-Fasting", iconPosition: "top" },
  ];
  const header = tabHeader.map((item) => (
    <div key={item.text} className={item.iconCss}>
      {item.text}
    </div>
  ));

  function onCreated() {
    let iconDiv = document.createElement("div");
    iconDiv.className = "e-tab-header-icon-div";
    let iconSpan = document.createElement("span");
    iconSpan.className = "e-tab-header-icon icon-Logo";
    iconDiv.appendChild(iconSpan);
    let titleDiv = document.createElement("div");
    titleDiv.className = "e-tab-title";
    titleDiv.innerText = "GO";
    let titleSpan = document.createElement("span");
    titleSpan.innerText = "FIT";
    titleDiv.appendChild(titleSpan);
    let containerDiv = document.createElement("div");
    containerDiv.className = "e-tab-header-icon-container";
    containerDiv.appendChild(iconDiv);
    containerDiv.appendChild(titleDiv);
    this.element.querySelector(".e-tab-header").prepend(containerDiv);
  }

  return (
    <TabComponent created={onCreated}>
      <div className="e-tab-header">{header}</div>
      <div className="e-content">
        <div>
          <Activities></Activities>
        </div>
        <div>
          <h1>Design the UI for Diet Page !!!</h1>
          <diet-app calories-value={fitnessData.actData.calories} />
        </div>
        <div>
          <h1>Design the UI for Fasting Page !!!</h1>
        </div>
      </div>
    </TabComponent>
  );
}
