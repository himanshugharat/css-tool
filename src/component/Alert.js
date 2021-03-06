import React from "react";

function Alert(props) {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: props.color,
          padding: "20px",
          color: "white",
        }}
      >
        <strong>{props.type}</strong> {props.children}
      </div>
    </div>
  );
}

export default Alert;
