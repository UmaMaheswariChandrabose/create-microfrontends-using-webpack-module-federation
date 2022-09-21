import React, { createContext, useContext, useState } from "react";
import { activityValues } from "./ActivityData";
import { dietChartData } from "./DietChartData";
import { workoutChartData } from "./ChartWorkOutData";
import { gridActivities } from "./GridData";
import { dietJournalData } from "./DietJournalData";

var dataIndex = activityValues.length - 1;
var dropDownState;
var currentActData = activityValues[0];

export const FitnessContext = createContext(activityValues[0]);

export function FitnessProvider({ children }) {
  const changeDate = (args) => {
    const aFilteredData = activityValues.filter(function (item) {
      return (
        item.activityDate.toLocaleDateString() ===
        args.value.toLocaleDateString()
      );
    });
    currentActData = aFilteredData[0]; // for test
    dataIndex = activityValues.indexOf(aFilteredData[0]);
    var dietData =
      dropDownState === "Weekly"
        ? setWeeklyChartData().weekDietData
        : dietChartData;
    var workoutData =
      dropDownState === "Weekly"
        ? setWeeklyChartData().weekWorkData
        : workoutChartData;

    const gFilteredData = gridActivities.filter(function (item) {
      return item.Date.toLocaleDateString() === args.value.toLocaleDateString();
    });

    const pFilteredData = dietJournalData.filter(function (item) {
      return item.date.toLocaleDateString() === args.value.toLocaleDateString();
    });

    setFitnessData({
      actData: aFilteredData[0],
      chartData: { diet: dietData, workout: workoutData },
      gridData: gFilteredData,
      profileData: pFilteredData,
      changeDate,
      dropdownChange,
      changeCalories,
    });
  };

  function setWeeklyChartData() {
    const weekDietData = [],
      weekWorkData = [];
    if (dataIndex - 7 >= 0) {
      for (let i = dataIndex; i > dataIndex - 7; i--) {
        weekDietData.push(dietChartData[i]);
        weekWorkData.push(workoutChartData[i]);
      }
    }
    return { weekDietData, weekWorkData };
  }

  const changeCalories = (value) => {
    currentActData.calories = value;
    setFitnessData((prevData) => {
      return {
        ...prevData,
        actData: currentActData,
      };
    });
  };

  const dropdownChange = (args) => {
    dropDownState = args.value;
    var dietData =
      args.value === "Weekly"
        ? setWeeklyChartData().weekDietData
        : dietChartData;
    var workoutData =
      args.value === "Weekly"
        ? setWeeklyChartData().weekWorkData
        : workoutChartData;
    setFitnessData((prevData) => {
      return {
        ...prevData,
        chartData: { diet: dietData, workout: workoutData },
      };
    });
  };

  const gridInitialData = gridActivities.filter(function (item) {
    return item.Date.toLocaleDateString() === new Date().toLocaleDateString();
  });

  const profileInitialData = dietJournalData.filter(function (item) {
    return item.date.toLocaleDateString() === new Date().toLocaleDateString();
  });

  const [fitnessData, setFitnessData] = useState({
    actData: activityValues[activityValues.length - 1],
    chartData: {
      diet: dietChartData,
      workout: workoutChartData,
    },
    gridData: gridInitialData,
    profileData: profileInitialData,
    changeDate,
    dropdownChange,
    changeCalories,
  });

  return (
    <FitnessContext.Provider value={{ fitnessData }}>
      {children}
    </FitnessContext.Provider>
  );
}

export function useFitness() {
  return useContext(FitnessContext);
}
