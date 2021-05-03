import React, { useState } from "react";
import Button from "../../component/Button";
import tile from "../../style/gradient.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../../assets/images/templete.svg";
function Grayscale() {
  const [grayscale, setGrayscale] = useState(100);

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
              max="100"
              min="1"
              value={grayscale}
              onChange={(e) => {
                setGrayscale(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className={tile.output}>
        <div className={tile.card}>
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              filter: `grayscale(${grayscale}%)`,
              height: "200px",
              width: "250px",
            }}
          ></div>
        </div>
      </div>
      <div className={tile.clipboard}>
        <div className={tile.card}>
          <div>filter: {`grayscale(${grayscale}%)`}</div>
          <Button
            name="copy"
            operation={() => {
              navigator.clipboard.writeText(`filter: grayscale(${grayscale}%)`);
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

export default Grayscale;
