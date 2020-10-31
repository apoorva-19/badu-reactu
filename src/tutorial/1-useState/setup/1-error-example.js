import React from "react";

const ErrorExample = () => {
  let title = "Random title";
  const handleClick = () => {
    title = "Hello People";
    console.log(title);
    /*This does not render the new title coz we aren't calling any render function. This only changes the value of title which can be seen in console logs */
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
  return <h2>useState error example</h2>;
};

export default ErrorExample;
