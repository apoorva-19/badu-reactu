import React from "react";
import { birthdays } from "./data";

const UseStateBirthday = () => {
  const [birthday, setBirthday] = React.useState(birthdays);
  return (
    <>
      <h1>Birthday's Today</h1>
      {birthday.map((person) => {
        const { id, name, age } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <h5>{age} years</h5>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setBirthday([]);
        }}
      >
        Clear Reminders
      </button>
    </>
  );
};

export default UseStateBirthday;
