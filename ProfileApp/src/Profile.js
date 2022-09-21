import React from "react";
import ProfilePicture from "./assets/profile/02.png";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./index.css";
import { useFitness } from "DataStore/store";

export default function Profile(props) {
  const { fitnessData } = useFitness();
  let currentDate = new Date(fitnessData.profileData[0].date);
  let profileData = fitnessData.profileData;
  let profileInfo = {
    name: "John Watson",
    age: 24,
    location: "India",
    weight: 70,
    height: 165,
    goal: 65,
    email: "john.watson@gmail.com",
    weightMes: "kg",
    goalMes: "kg",
    heightMes: "cm",
  };
  let maxDate = new Date();

  function onProfileDateChange(args) {
    fitnessData.changeDate(args);
  }

  function getFullDetails(dietJournal, index) {
    return (
      <div key={index} tabIndex={0} className="e-card e-diet-card">
        <div className="e-card-header" style={{ width: "100%" }}>
          <div className="e-card-header-caption">
            <div className="e-card-header-title">{dietJournal.activity}</div>
            <div>
              <div
                className="e-card-header-sub-title"
                style={{ float: "left" }}
              >
                {dietJournal.amount ? dietJournal.amount + " | " : ""}
                {dietJournal.duration ? dietJournal.duration + " | " : ""}
                {dietJournal.distance ? dietJournal.distance + " | " : ""}
                <span className="e-activity-highlight">
                  {dietJournal.percentage}
                </span>
              </div>
              <div
                className="e-card-header-sub-title"
                style={{ float: "right" }}
              >
                {dietJournal.time}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="e-panel e-activity-profile-panel">
      <div className="e-panel-container">
        <div>
          <div className="e-card e-custom-card">
            <div className="e-card-header">
              <div className="e-avatar e-avatar-circle">
                <img src={ProfilePicture} alt="JW" />
              </div>
              <div className="e-profile-editor">
                <div className="e-profile-inner-editor">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              &nbsp;
            </div>
            <div className="e-card-header">
              <div className="e-card-header-caption center">
                <div className="e-card-header-title">{profileInfo.name}</div>
                <div className="e-card-header-sub-title">
                  {profileInfo.age} Years, {profileInfo.location}
                </div>
              </div>
            </div>
            <div className="e-card-content">
              <table className="e-profile-details">
                <tbody>
                  <tr>
                    <td>
                      <div className="profile-row">Weight</div>
                    </td>
                    <td>
                      <div className="profile-row">Height</div>
                    </td>
                    <td>
                      <div className="profile-row">Goal</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="profile-value">
                        {profileInfo.weight + " " + profileInfo.weightMes}
                      </div>
                    </td>
                    <td>
                      <div className="profile-value">
                        {profileInfo.height + " " + profileInfo.heightMes}
                      </div>
                    </td>
                    <td>
                      <div className="profile-value">
                        {profileInfo.goal + " " + profileInfo.goalMes}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="e-journal" style={{ float: "left" }}>
              Journals
            </div>
            <div className="e-journal-date" style={{ float: "right" }}>
              <DatePickerComponent
                value={currentDate}
                max={maxDate}
                change={onProfileDateChange}
                width="100%"
              ></DatePickerComponent>
            </div>
          </div>
          <div className="profile-diet-card-container">
            {profileData.map(getFullDetails)}
          </div>
        </div>
      </div>
    </div>
  );
}
