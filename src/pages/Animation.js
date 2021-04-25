import React, { useState } from "react";
import Button from "../component/Button";
import tile from "../style/animation.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChromePicker } from "react-color";

function Animation() {
  const [textareaValue, setTextareaValue] = useState("");
  const [color, setColor] = useState("#fff");
  const [palletEnable, setpalletEnable] = useState(false);
  const notify = () =>
    toast.info("copied to clipboard", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const getTextareaValue = (e) => {
    setTextareaValue(`background-color:${color}`);
  };

  return (
    <div className={tile.gridContainer}>
      <div className={tile.input}>
        <Button
          name={palletEnable ? "hide pallet" : "show pallet"}
          operation={() => {
            setpalletEnable(!palletEnable);
          }}
        ></Button>
        {color}
        {palletEnable && (
          <ChromePicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        <span>you picked {color}</span>
      </div>
      <div className={tile.output}>
        <div
          style={{
            backgroundColor: color,
            height: "200px",
            width: "200px",
          }}
        ></div>
      </div>
      <div className={tile.clipboard}>
        {/* <textarea
          name="clipboard"
          id="clipCopy"
          cols="30"
          rows="10"
          spellCheck="false"
          value={textareaValue}
          onChange={getTextareaValue}
        ></textarea> */}
        <pre>background-color:{color}</pre>
        <Button
          name="copy"
          operation={() => {
            navigator.clipboard.writeText(`background-color:${color}`);
            notify();
          }}
        >
          data
        </Button>
      </div>
      <div className={tile.additional}></div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Animation;
/*
222831
30475e
f2a365
ececec
*/
