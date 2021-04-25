import React from "react";
import tile from "../style/button.module.css";
function Button(props) {
  return (
    <div>
      <button className={tile.defaultButton} onClick={props.operation}>
        {props.name}
      </button>
    </div>
  );
}

export default Button;
