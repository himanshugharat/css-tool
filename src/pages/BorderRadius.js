import React, { useState } from "react";
import Button from "../component/Button";
import tile from "../style/gradient.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function BorderRadius() {
  const [radiusType, setRadiusType] = useState("same");
  const [radius, setRadius] = useState(40);
  const [leftRadius, setleftRadius] = useState(10);
  const [rightRadius, setRightRadius] = useState(40);
  const [topRadius, setTopRadius] = useState(10);
  const [bottomRadius, setBottomRadius] = useState(40);

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

  const selectValue = (e) => {
    setRadiusType(e.target.value);
  };
  return (
    <div className={tile.gridContainer}>
      <div className={tile.input}>
        <div className={tile.card}>
          <label htmlFor="Type">Type</label>
          <div>
            <select
              name="borderRadiusType"
              id="borderRadiusType"
              onChange={selectValue}
            >
              <option value="same">same on all sides</option>
              <option value="different">different on all sides</option>
            </select>
          </div>
          <div>
            {radiusType === "same" && (
              <>
                <label htmlFor="inputRadius">Radius</label>
                <div>
                  <input
                    type="range"
                    name="opacity"
                    id=""
                    min="1"
                    max="100"
                    value={radius}
                    onChange={(e) => {
                      setRadius(e.target.value);
                    }}
                  />
                </div>
              </>
            )}
            {radiusType === "different" && (
              <>
                <label htmlFor="">Top Left </label>
                <div>
                  <input
                    type="range"
                    name="opacity"
                    id=""
                    min="1"
                    max="100"
                    value={leftRadius}
                    onChange={(e) => {
                      setleftRadius(e.target.value);
                    }}
                  />
                </div>
                <label htmlFor="">Top Right </label>
                <div>
                  <input
                    type="range"
                    name="opacity"
                    id=""
                    min="1"
                    max="100"
                    value={rightRadius}
                    onChange={(e) => {
                      setRightRadius(e.target.value);
                    }}
                  />
                </div>
                <label htmlFor="">Bottom left </label>
                <div>
                  <input
                    type="range"
                    name="opacity"
                    id=""
                    min="1"
                    max="100"
                    value={topRadius}
                    onChange={(e) => {
                      setTopRadius(e.target.value);
                    }}
                  />
                </div>
                <label htmlFor="">Bottom right</label>
                <div>
                  <input
                    type="range"
                    name="opacity"
                    id=""
                    min="1"
                    max="100"
                    value={bottomRadius}
                    onChange={(e) => {
                      setBottomRadius(e.target.value);
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={tile.output}>
        <div className={tile.card}>
          {radiusType == "same" && (
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: `${radius}px`,
                height: "300px",
                width: "300px",
              }}
            ></div>
          )}
          {radiusType == "different" && (
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: `${leftRadius}px ${rightRadius}px  ${bottomRadius}px ${topRadius}px`,
                height: "300px",
                width: "300px",
              }}
            ></div>
          )}
        </div>
      </div>
      <div className={tile.clipboard}>
        <div className={tile.card}>
          {radiusType === "same" && <div> border-radius :{` ${radius}px`}</div>}
          {radiusType === "different" && (
            <div>
              {" "}
              border-radius :
              {` ${leftRadius}px ${rightRadius}px ${bottomRadius}px ${topRadius}px`}
            </div>
          )}
          {radiusType === "same" && (
            <Button
              name="copy"
              operation={() => {
                navigator.clipboard.writeText(`border-radius : ${radius}px`);
                notify();
              }}
            >
              data
            </Button>
          )}
          {radiusType === "different" && (
            <Button
              name="copy"
              operation={() => {
                navigator.clipboard.writeText(
                  `border-radius : ${leftRadius}px ${rightRadius}px ${bottomRadius}px ${topRadius}px`
                );
                notify();
              }}
            >
              data
            </Button>
          )}
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

export default BorderRadius;
