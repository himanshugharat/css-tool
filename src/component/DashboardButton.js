import React from "react";
import { Link } from "react-router-dom";
import tile from "../style/dashboardButton.module.css";

function DashboardButton(props) {
  return (
    <>
      <Link to={props.to} className={tile.link}>
        <button title={props.children} className={tile.button}>
          {props.children}
        </button>
      </Link>
    </>
  );
}

export default DashboardButton;
