import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });

  // You can set up any number of state values
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Random Message");

  const changeMessage = () => {
    // setPerson({ message: "hello world" }); -> This changes the whole thing - even the other parameters.
    // setPerson({ ...person, message: "Hello World" });
    setMessage("Hello World");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
