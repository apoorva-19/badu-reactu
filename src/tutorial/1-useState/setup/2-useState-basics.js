import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("Hello World"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  //The convention is to name function as set<var name>
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("Hello World");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
