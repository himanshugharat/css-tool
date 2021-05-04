import React from "react";
import tile from "../style/header.module.css";
import { VscHome } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className={tile.header}>
        <Link to="/">
          <VscHome />
        </Link>
        <div className={tile.headerName}>Happy Building</div>
      </div>
    </div>
  );
}

export default Header;
