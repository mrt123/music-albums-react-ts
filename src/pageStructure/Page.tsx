import React from "react";
import NavBar from "./NavBar";
import { Link, Outlet } from "react-router-dom";
import ShoppingCartIcon from "../common/ShoppingCartIcon";
import { useMediaQuery } from "react-responsive";
import { RootState } from "../state/store";
import { useAppSelector } from "../state/stateHooks";

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
  const numberOfItems = useAppSelector(
    (state: RootState) => state.shoppingCart.numberOfItems
  );

  const isBigScreen = useMediaQuery({ query: "(min-width: 800px)" });

  return (
    <div style={getPageStyle(isBigScreen)}>
      <header style={headerStyle}>
        <Link to="/" style={headerLinkStyle}>
          Music Albums
        </Link>
        <ShoppingCartIcon numberOfItems={numberOfItems} />
      </header>
      <NavBar />
      <section style={sectionStyle}>
        <Outlet />
      </section>
    </div>
  );
};

export default Page;
