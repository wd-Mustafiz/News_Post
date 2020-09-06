import React from "react";

const NoMatch = () => {
  return (
    <div
      style={{
        width: "50%",
        position: "absolute",
        textAlign: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50% , -50%)",
        padding: "50px 30px",
        borderRadius: "8px",
        color: "teal",
        boxShadow: "1px 2px skyBlue",
      }}
    >
      <h1>404 not found :(</h1>
    </div>
  );
};

export default NoMatch;
