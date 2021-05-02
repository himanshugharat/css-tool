import React, { useState } from "react";
import Button from "../component/Button";
import tile from "../style/gradient.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alert from "../component/Alert";
function Opacity() {
  const [opacity, setOpacity] = useState(40);

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
    <>
      <div className={tile.gridContainer}>
        <div className={tile.input}>
          <div className={tile.card}>
            <div>
              <label htmlFor="inputOpacity">Amount</label>
              <div>
                <input
                  type="range"
                  name="opacity"
                  id=""
                  min="0"
                  max="1"
                  step="0.01"
                  value={opacity}
                  onChange={(e) => {
                    setOpacity(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={tile.output}>
          <div className={tile.card}>
            <div
              style={{
                backgroundColor: "#fff",
                opacity: `${opacity}`,
                height: "300px",
                width: "300px",
              }}
            ></div>
          </div>
        </div>
        <div className={tile.clipboard}>
          <div className={tile.card}>
            <div> opacity :{` ${opacity}px`}</div>

            <Button
              name="copy"
              operation={() => {
                navigator.clipboard.writeText(`opacity : ${opacity}`);
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
    </>
  );
}

export default Opacity;
