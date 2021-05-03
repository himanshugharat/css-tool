import React, { useState } from "react";
import Button from "../../component/Button";
import tile from "../../style/gradient.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../../assets/images/templete.svg";
function Saturation() {
  const [saturate, setSaturation] = useState(100);

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
          <label htmlFor="amount">Amount</label>
          <div>
            <input
              type="range"
              max="300"
              min="1"
              value={saturate}
              onChange={(e) => {
                setSaturation(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className={tile.output}>
        <div className={tile.card}>
          <div
            style={{
              backgroundImage: `url("https://www.online-tech-tips.com/wp-content/uploads/2020/04/WallpaperCraft.jpg.optimal.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              filter: `saturate(${saturate}%)`,
              height: "200px",
              width: "250px",
            }}
          ></div>
        </div>
      </div>
      <div className={tile.clipboard}>
        <div className={tile.card}>
          <div>filter: {`saturate(${saturate}%)`}</div>
          <Button
            name="copy"
            operation={() => {
              navigator.clipboard.writeText(`filter: saturate(${saturate}%)`);
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

export default Saturation;
