import React, { useState } from "react";
import Button from "../../component/Button";
import tile from "../../style/gradient.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChromePicker } from "react-color";
function Dropshadow() {
  const [color, setColor] = useState("#000");
  const [horizontal, setHorizontal] = useState(-10);
  const [vertical, setVertical] = useState(0);
  const [blur, setBlur] = useState(10);
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
  return (
    <div className={tile.gridContainer}>
      <div className={tile.input}>
        <div className={tile.card}>
          <div>
            <input
              type="text"
              name="primaryColor"
              value={color}
              autoComplete="off"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <Button
              name={palletEnable ? "hide pallet" : "Edit color"}
              operation={() => {
                setpalletEnable(!palletEnable);
              }}
            ></Button>

            {palletEnable && (
              <ChromePicker
                color={color}
                onChange={(updatedColor) => setColor(updatedColor.hex)}
              />
            )}
          </div>
          <label htmlFor="horizontal offset">Horizontal offset</label>
          <div>
            <input
              type="range"
              max="100"
              min="-100"
              value={horizontal}
              onChange={(e) => {
                setHorizontal(e.target.value);
              }}
            />
          </div>
          <label htmlFor="vertical offset">Vertical offset</label>

          <div>
            <input
              type="range"
              max="100"
              min="-100"
              value={vertical}
              onChange={(e) => {
                setVertical(e.target.value);
              }}
            />
          </div>
          <label htmlFor="horizontal offset">Blur</label>

          <div>
            <input
              type="range"
              max="100"
              min="0"
              value={blur}
              onChange={(e) => {
                setBlur(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className={tile.output}>
        <div className={tile.card}>
          <div
            style={{
              backgroundImage: `url("https://www.lunapic.com/editor/premade/transparent.gif")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              filter: `drop-shadow(${horizontal}px ${vertical}px ${blur}px ${color})`,
              height: "200px",
              width: "200px",
            }}
          ></div>
        </div>
      </div>
      <div className={tile.clipboard}>
        <div className={tile.card}>
          <div>{`drop-shadow(${horizontal}px ${vertical}px ${blur}px ${color})`}</div>
          <Button
            name="copy"
            operation={() => {
              navigator.clipboard.writeText(
                `drop-shadow(${horizontal}px ${vertical}px ${blur}px ${color})`
              );
              notify();
            }}
          />
        </div>
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

export default Dropshadow;
