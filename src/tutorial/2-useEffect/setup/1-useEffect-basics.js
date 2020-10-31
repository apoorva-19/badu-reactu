import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New Message(${value})`;
    }
  });
  // To run useEffect only on initial render
  // useEffect(() => {
  //   console.log("call useEffect");
  //   if (value > 1) {
  //     document.title = `New Message(${value})`;
  //   }
  // }, []);
  //You can have any number of useEffects. It run only on the initial render. The value has no dependencies
  useEffect(() => {
    console.log("hello world");
  });
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
