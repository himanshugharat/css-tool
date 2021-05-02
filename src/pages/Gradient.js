import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Button from "../component/Button";
import tile from "../style/gradient.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Gradient() {
  const [primary, setprimary] = useState("#000");
  const [secondary, setsecondary] = useState("#FF0000");
  const [gradientType, setgradientType] = useState("linear");
  const [palletEnablePrimary, setpalletEnablePrimary] = useState(false);
  const [palletEnablesecondary, setpalletEnablesecondary] = useState(false);
  const [degree, setdegree] = useState(0);
  const [opacity1, setOpacity1] = useState(100);
  const [opacity, setOpacity] = useState(0);
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
  const updatePriColor = (e) => {
    setprimary(e.target.value);
  };
  const updatesecColor = (e) => {
    setprimary(e.target.value);
  };

  const selectValue = (e) => {
    setgradientType(e.target.value);
  };
  const updatedegree = (e) => {
    setdegree(e.target.value);
  };
  var linear = `linear-gradient(${degree}deg, ${primary} ${opacity}%, ${secondary} ${opacity1}%)`;
  var radial = `radial-gradient( ${primary} ${opacity}%, ${secondary} ${opacity1}%)`;
  return (
    <div className={tile.gridContainer}>
      <div className={tile.input}>
        <div className={tile.card}>
          <div>
            <input
              type="text"
              name="primaryColor"
              value={primary}
              onChange={updatePriColor}
            />
            <Button
              name={palletEnablePrimary ? "hide pallet" : "Edit color"}
              operation={() => {
                setpalletEnablePrimary(!palletEnablePrimary);
                setpalletEnablesecondary(false);
              }}
            ></Button>
            <input
              type="number"
              name="primaryColor"
              value={opacity}
              max="100"
              min="0"
              style={{ width: "50px" }}
              onChange={(e) => {
                setOpacity(e.target.value);
              }}
            />
          </div>
          <div>
            {" "}
            {palletEnablePrimary && (
              <ChromePicker
                color={primary}
                onChange={(updatedColor) => setprimary(updatedColor.hex)}
              />
            )}
          </div>
          <div>
            <input
              type="text"
              name="secondaryColor"
              value={secondary}
              onChange={updatesecColor}
            />
            <Button
              name={palletEnablesecondary ? "hide pallet" : "Edit color"}
              operation={() => {
                setpalletEnablesecondary(!palletEnablesecondary);
                setpalletEnablePrimary(false);
              }}
            ></Button>
            <input
              type="number"
              name="secondaryColor"
              value={opacity1}
              max="100"
              min="0"
              style={{ width: "50px" }}
              onChange={(e) => {
                setOpacity1(e.target.value);
              }}
            />
            <div>
              {palletEnablesecondary && (
                <ChromePicker
                  color={secondary}
                  onChange={(updatedColor) => setsecondary(updatedColor.hex)}
                />
              )}
            </div>
          </div>
          <div>
            <select name="cars" id="cars" onChange={selectValue}>
              <option value="linear">linear</option>
              <option value="radial">radial</option>
            </select>
          </div>
          <div>
            {gradientType === "linear" && (
              <input
                type="range"
                name="opacity"
                id=""
                min="1"
                max="360"
                value={degree}
                onChange={updatedegree}
              />
            )}
          </div>
        </div>
      </div>
      <div className={tile.output}>
        <div className={tile.card}>
          <div
            style={{
              background: gradientType === "linear" ? linear : radial,
              height: "200px",
              width: "200px",
            }}
          ></div>
        </div>
      </div>
      <div className={tile.clipboard}>
        <div className={tile.card}>
          <div> background: {gradientType === "linear" ? linear : radial}</div>
          <Button
            name="copy"
            operation={() => {
              navigator.clipboard.writeText(
                `${gradientType === "linear" ? linear : radial}`
              );
              notify();
            }}
          >
            data
          </Button>
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

export default Gradient;
