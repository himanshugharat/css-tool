import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Button from "../component/Button";
import tile from "../style/border.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Border() {
  const [primary, setprimary] = useState("#000");
  const [borderType, setborderType] = useState("same");
  const [borderStyle, setborderStyle] = useState("solid");
  const [palletEnablePrimary, setpalletEnablePrimary] = useState(false);
  const [borderwidth, setBorderwidth] = useState(10);
  const [leftBorder, setleftBorder] = useState({
    color: "#000",
    width: "10",
    type: "dotted",
    pallet: false,
  });
  const [rightBorder, setRightBorder] = useState({
    color: "#e30d0d",
    width: "10",
    type: "groove",
    pallet: false,
  });
  const [topBorder, setTopBorder] = useState({
    color: "#95e30d",
    width: "10",
    type: "dashed",
    pallet: false,
  });
  const [bottomBorder, setBottomBorder] = useState({
    color: "#e30d6f",
    width: "10",
    type: " inset",
    pallet: false,
  });
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

  const selectValue = (e) => {
    setborderType(e.target.value);
  };
  const selectBorderStyle = (e) => {
    setborderStyle(e.target.value);
  };
  const updatewidth = (e) => {
    setBorderwidth(e.target.value);
  };

  return (
    <div className={tile.gridContainer}>
      <div className={tile.input}>
        <div className={tile.card}>
          <label htmlFor="">style</label>
          <div>
            <select name="borderType" id="borderType" onChange={selectValue}>
              <option value="same">same on all sides</option>
              <option value="different">different on all sides</option>
            </select>
          </div>
          {borderType === "same" && (
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
          )}
          {borderType === "different" && (
            <div>
              <h2>left</h2>
              <label htmlFor="">color</label>
              <div>
                <input
                  type="text"
                  name="primaryColor"
                  value={leftBorder.color}
                  onChange={(val) => {
                    setleftBorder((re) => ({
                      ...re,
                      color: val.target.value,
                    }));
                  }}
                />
                <Button
                  name={leftBorder.pallet ? "hide pallet" : "Edit color"}
                  operation={() => {
                    setleftBorder((re) => ({
                      ...re,
                      pallet: !re.pallet,
                    }));
                  }}
                ></Button>
                {leftBorder.pallet && (
                  <ChromePicker
                    color={leftBorder.color}
                    onChange={(updatedColor) => {
                      setleftBorder((re) => ({
                        ...re,
                        color: updatedColor.hex,
                      }));
                    }}
                  />
                )}
              </div>
              <label htmlFor="">types</label>
              <div>
                <select
                  name="varient"
                  id="varient"
                  onChange={(val) => {
                    setleftBorder((re) => ({
                      ...re,
                      type: val.target.value,
                    }));
                  }}
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
                  value={leftBorder.width}
                  onChange={(val) => {
                    setleftBorder((re) => ({
                      ...re,
                      width: val.target.value,
                    }));
                  }}
                />
              </div>
              <h2>Right</h2>
              <label htmlFor="">color</label>
              <div>
                <input
                  type="text"
                  name="primaryColor"
                  value={rightBorder.color}
                  onChange={(val) => {
                    setRightBorder((re) => ({
                      ...re,
                      color: val.target.value,
                    }));
                  }}
                />
                <Button
                  name={rightBorder.pallet ? "hide pallet" : "Edit color"}
                  operation={() => {
                    setRightBorder((re) => ({
                      ...re,
                      pallet: !re.pallet,
                    }));
                  }}
                ></Button>
                {rightBorder.pallet && (
                  <ChromePicker
                    color={rightBorder.color}
                    onChange={(updatedColor) => {
                      setRightBorder((re) => ({
                        ...re,
                        color: updatedColor.hex,
                      }));
                    }}
                  />
                )}
              </div>
              <label htmlFor="">types</label>
              <div>
                <select
                  name="varient"
                  id="varient"
                  onChange={(val) => {
                    setRightBorder((re) => ({
                      ...re,
                      type: val.target.value,
                    }));
                  }}
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
                  value={rightBorder.width}
                  onChange={(val) => {
                    setRightBorder((re) => ({
                      ...re,
                      width: val.target.value,
                    }));
                  }}
                />
              </div>
              <h2>Top</h2>
              <label htmlFor="">color</label>
              <div>
                <input
                  type="text"
                  name="primaryColor"
                  value={topBorder.color}
                  onChange={(val) => {
                    setTopBorder((re) => ({
                      ...re,
                      color: val.target.value,
                    }));
                  }}
                />
                <Button
                  name={topBorder.pallet ? "hide pallet" : "Edit color"}
                  operation={() => {
                    setTopBorder((re) => ({
                      ...re,
                      pallet: !re.pallet,
                    }));
                  }}
                ></Button>
                {topBorder.pallet && (
                  <ChromePicker
                    color={topBorder.color}
                    onChange={(updatedColor) => {
                      setTopBorder((re) => ({
                        ...re,
                        color: updatedColor.hex,
                      }));
                    }}
                  />
                )}
              </div>
              <label htmlFor="">types</label>
              <div>
                <select
                  name="varient"
                  id="varient"
                  onChange={(val) => {
                    setTopBorder((re) => ({
                      ...re,
                      type: val.target.value,
                    }));
                  }}
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
                  value={topBorder.width}
                  onChange={(val) => {
                    setTopBorder((re) => ({
                      ...re,
                      width: val.target.value,
                    }));
                  }}
                />
              </div>
              <h2>Bottom</h2>
              <label htmlFor="">color</label>
              <div>
                <input
                  type="text"
                  name="primaryColor"
                  value={bottomBorder.color}
                  onChange={(val) => {
                    setBottomBorder((re) => ({
                      ...re,
                      color: val.target.value,
                    }));
                  }}
                />
                <Button
                  name={bottomBorder.pallet ? "hide pallet" : "Edit color"}
                  operation={() => {
                    setBottomBorder((re) => ({
                      ...re,
                      pallet: !re.pallet,
                    }));
                  }}
                ></Button>
                {bottomBorder.pallet && (
                  <ChromePicker
                    color={bottomBorder.color}
                    onChange={(updatedColor) => {
                      setBottomBorder((re) => ({
                        ...re,
                        color: updatedColor.hex,
                      }));
                    }}
                  />
                )}
              </div>
              <label htmlFor="">types</label>
              <div>
                <select
                  name="varient"
                  id="varient"
                  onChange={(val) => {
                    setBottomBorder((re) => ({
                      ...re,
                      type: val.target.value,
                    }));
                  }}
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
                  value={bottomBorder.width}
                  onChange={(val) => {
                    setBottomBorder((re) => ({
                      ...re,
                      width: val.target.value,
                    }));
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={tile.output}>
        <div className={tile.card}>
          {borderType === "same" && (
            <div
              style={{
                border: `${borderwidth}px ${borderStyle} ${primary}`,
                //   border: "20px dashed #0000ff",
                // borderLeft: `${leftBorder.width}px ${leftBorder.type} ${leftBorder.color}`,
                height: "180px",
                width: "180px",
              }}
            ></div>
          )}
          {borderType === "different" && (
            <div
              style={{
                // border: `${borderwidth}px ${borderStyle} ${primary}`,
                //   border: "20px dashed #0000ff",
                borderLeft: `${leftBorder.width}px ${leftBorder.type} ${leftBorder.color}`,
                borderRight: `${rightBorder.width}px ${rightBorder.type} ${rightBorder.color}`,
                borderTop: `${topBorder.width}px ${topBorder.type} ${topBorder.color}`,
                borderBottom: `${bottomBorder.width}px ${bottomBorder.type} ${bottomBorder.color}`,
                height: "180px",
                width: "180px",
              }}
            ></div>
          )}
        </div>
      </div>
      <div className={tile.clipboard}>
        <div className={tile.card}>
          {borderType === "same" && (
            <div> border: {`${borderwidth}px ${borderStyle} ${primary}`}</div>
          )}
          {borderType === "different" && (
            <>
              <div>
                {" "}
                border-left:{" "}
                {`${leftBorder.width}px ${leftBorder.type} ${leftBorder.color}`}
              </div>
              <div>
                {" "}
                border-right:{" "}
                {`${rightBorder.width}px ${rightBorder.type} ${rightBorder.color}`}
              </div>
              <div>
                {" "}
                border-bottom:{" "}
                {`${topBorder.width}px ${topBorder.type} ${topBorder.color}`}
              </div>
              <div>
                {" "}
                border-top:{" "}
                {`${bottomBorder.width}px ${bottomBorder.type} ${bottomBorder.color}`}
              </div>
            </>
          )}
          {borderType === "same" && (
            <Button
              name="copy"
              operation={() => {
                navigator.clipboard.writeText(
                  `border: ${borderwidth}px ${borderStyle} ${primary}`
                );
                notify();
              }}
            />
          )}
          {borderType === "different" && (
            <Button
              name="copy"
              operation={() => {
                navigator.clipboard.writeText(
                  `border-left: ${leftBorder.width}px ${leftBorder.type} ${leftBorder.color}; \n border-right: ${rightBorder.width}px ${rightBorder.type} ${rightBorder.color}; \n border-bottom: ${bottomBorder.width}px ${bottomBorder.type} ${bottomBorder.color} ; \n border-top: ${topBorder.width}px ${topBorder.type} ${topBorder.color}`
                );
                notify();
              }}
            />
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

export default Border;
