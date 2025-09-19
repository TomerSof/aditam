"use client";

import { AppBar, Toolbar } from "@mui/material";
import React, { useState } from "react";

import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

const pages = [
  { link: "Home", text: "בית" },
  { link: "Bracelets", text: "צמידים" },
  { link: "Necklaces", text: "שרשראות" },
  { link: "Earrings", text: "עגילים" },
];

export const Navbar = () => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  const handleCloseMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const handleOpenMenu = () => {
    setAnchorNav(null);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ width: "100%" }}>
          {/* Desktop Menu */}
          <DesktopMenu pages={pages} />
          {/* Mobile Menu */}
          <MobileMenu
            anchorNav={anchorNav}
            handleCloseMenu={handleCloseMenu}
            handleOpenMenu={handleOpenMenu}
            pages={pages}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
