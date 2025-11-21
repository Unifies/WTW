import React from "react";
import Glee from "/glee.png";

const TestComponent = () => {
  return (
    <>
      <h1>
        This has been quite the journey. <br></br>
        The image below matches my mood doing this. <br></br>
        PS: It's actually so enjoyable
      </h1>

      <img src={Glee} alt="Pretty fulfilled" />
    </>
  );
};

export default TestComponent;
