import React from "react";
import tile from "../style/header.module.css";
import { VscMenu } from "react-icons/vsc";
function Header() {
  return (
    <div>
      <div className={tile.header}>
        <VscMenu />
        <div className={tile.headerName}>hello</div>
      </div>
    </div>
  );
}

export default Header;
