import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h2>value:{secondValue}</h2> */}
      <h1>{text || "John Doe"}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => setIsError(!isError)}
      >
        Toggle error
      </button>
      {/* {isError && <h1>Error...</h1>} */}
      {isError ? (
        <h2>There is an error...</h2>
      ) : (
        <div>
          <h2>There is no error...</h2>
        </div>
      )}
      {/* {text || <h1>Hello World</h1>}
      {!text && <h1>Hello World</h1>} */}
    </>
  );
};

export default ShortCircuit;
