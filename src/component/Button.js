import React from "react";
import tile from "../style/button.module.css";
function Button(props) {
  return (
    <>
      <button className={tile.defaultButton} onClick={props.operation}>
        {props.name}
      </button>
    </>
  );
}

export default Button;
