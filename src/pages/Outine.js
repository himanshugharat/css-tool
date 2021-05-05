import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Button from "../component/Button";
import tile from "../style/border.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alert from "../component/Alert";
import Breadcrumbs from "../component/Breadcrumbs";

function Outine() {
  const [primary, setprimary] = useState("#000");
  const [borderStyle, setborderStyle] = useState("solid");
  const [palletEnablePrimary, setpalletEnablePrimary] = useState(false);
  const [borderwidth, setBorderwidth] = useState(10);
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

  const selectBorderStyle = (e) => {
    setborderStyle(e.target.value);
  };
  const updatewidth = (e) => {
    setBorderwidth(e.target.value);
  };

  return (
    <>
      {/* <Breadcrumbs /> */}
      <Alert color="blue" type="Info">
        Outline differs from borders! Unlike border, the outline is drawn
        outside the element's border, and may overlap other content. Also, the
        outline is NOT a part of the element's dimensions; the element's total
        width and height is not affected by the width of the outline.
      </Alert>
      <div className={tile.gridContainer}>
        <div className={tile.input}>
          <div className={tile.card}>
            <div>
              {" "}
              <h2>All Sides</h2>
              <label htmlFor="">color</label>
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
                  }}
                ></Button>
                {palletEnablePrimary && (
                  <ChromePicker
                    color={primary}
                    onChange={(updatedColor) => setprimary(updatedColor.hex)}
                  />
                )}
              </div>
              <label htmlFor="">types</label>
              <div>
                <select
                  name="varient"
                  id="varient"
                  onChange={selectBorderStyle}
                >
                  <option value="solid">solid</option>
                  <option value="dotted">dotted</option>
                  <option value="dashed">dashed</option>
                  <option value="double">double</option>
                  <option value="groove">groove</option>
                  <option value="ridge">ridge</option>
                  <option value="inset">inset</option>
                  <option value="outset">outset</option>
                </select>
              </div>
              <label htmlFor="">width</label>
              <div>
                <input
                  type="range"
                  name="opacity"
                  id=""
                  min="1"
                  max="100"
                  value={borderwidth}
                  onChange={updatewidth}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={tile.output}>
          <div className={tile.card}>
            <div
              style={{
                outline: `${borderwidth}px ${borderStyle} ${primary}`,
                //   border: "20px dashed #0000ff",
                // borderLeft: `${leftBorder.width}px ${leftBorder.type} ${leftBorder.color}`,
                height: "180px",
                width: "180px",
              }}
            ></div>
          </div>
        </div>
        <div className={tile.clipboard}>
          <div className={tile.card}>
            <div> outline: {`${borderwidth}px ${borderStyle} ${primary}`}</div>

            <Button
              name="copy"
              operation={() => {
                navigator.clipboard.writeText(
                  `outline: ${borderwidth}px ${borderStyle} ${primary}`
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
    </>
  );
}

export default Outine;
