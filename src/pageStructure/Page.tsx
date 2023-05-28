import React from "react";
import NavBar from "./NavBar";
import { Link, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "..";

const getPageStyle = (isBigScreen: boolean) => {
  const bigScreenAreas = `
  'header header'
  'navbar main'
 `;
  const smallScreenAreas = `
  'header header'
  'navbar navbar'
  'main main'
 `;

  return {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    gridTemplateRows: isBigScreen ? "auto 8fr" : "auto auto 8fr",
    gridTemplateAreas: isBigScreen ? bigScreenAreas : smallScreenAreas,
  };
};

const sectionStyle = {
  gridArea: "main",
};

const headerStyle = {
  gridArea: "header",
  position: "sticky" as "sticky",
  top: "0",
  zIndex: 1000,
  padding: "25px",
  background: "black",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "36px",
};

const headerLinkStyle = {
  textDecoration: "none",
  color: "white",
};

const Page = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 800px)" });
  const value = useAppSelector((state) => state.value);

  return (
    <div style={getPageStyle(isBigScreen)}>
      <header style={headerStyle}>
        <Link to="/" style={headerLinkStyle}>
          Music Albums
        </Link>
        <span>{value}</span>
      </header>
      <NavBar />
      <section style={sectionStyle}>
        <Outlet />
      </section>
    </div>
  );
};

export default Page;
