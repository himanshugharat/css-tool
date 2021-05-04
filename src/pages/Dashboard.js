import React from "react";
import DashboardButton from "../component/DashboardButton";
import tile from "../style/dashboard.module.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "../component/Breadcrumbs";

function Dashboard() {
  return (
    <>
      {/* <Breadcrumbs /> */}
      <div>
        <h2>Background</h2>
      </div>
      <div className={tile.main}>
        <DashboardButton to="/background">Background color</DashboardButton>

        <DashboardButton to="/border">Border</DashboardButton>

        <DashboardButton to="/borderRadius">Border Radius</DashboardButton>

        <DashboardButton to="/gradient">Gradient</DashboardButton>

        <DashboardButton to="/opacity">Opacity</DashboardButton>

        <DashboardButton to="/outline">Outline</DashboardButton>
      </div>
      <div>
        <h2>Filter</h2>
      </div>
      <div className={tile.main}>
        <DashboardButton to="blur">Blur</DashboardButton>
        <DashboardButton to="brightness">Brightness</DashboardButton>
        <DashboardButton to="contrast">Contrast</DashboardButton>
        <DashboardButton to="dropShadow">DropShadow</DashboardButton>
        <DashboardButton to="grayScale">GrayScale</DashboardButton>
        <DashboardButton to="saturate">Saturate</DashboardButton>
        <DashboardButton to="sepia">Sepia</DashboardButton>
      </div>
    </>
  );
}

export default Dashboard;
