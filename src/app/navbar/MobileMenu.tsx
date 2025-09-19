import React from "react";
import { Button, IconButton, Input, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, MenuList } from "@mui/material";

interface MobileMenuProps {
  pages: { link: string; text: string }[];
  anchorNav: null | HTMLElement;
  handleCloseMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleOpenMenu: () => void;
}
export const MobileMenu = ({
  pages,
  anchorNav,
  handleCloseMenu,
  handleOpenMenu,
}: MobileMenuProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        display: { xs: "flex", md: "none" },
        width: "100%",
        position: "relative",
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100vw",
          position: "relative",
        }}
      >
        <Grid size={3}>
          {/* Left: Social icons */}
          <Stack direction="row" spacing={1}>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <MailOutlineIcon />
            </IconButton>
            <IconButton color="inherit">
              <WhatsAppIcon />
            </IconButton>
          </Stack>
        </Grid>
        {/* Center: Title */}
        <Grid size={6}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Knowledge
          </Typography>
        </Grid>
        {/* Right: Menu icon */}
        <Grid size={3} textAlign="right">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            size="large"
            onClick={handleCloseMenu}
          >
            <MenuIcon />
          </IconButton>
          {/* Menu portal (doesn't affect layout) */}
          <Menu
            open={Boolean(anchorNav)}
            anchorEl={anchorNav}
            onClose={handleOpenMenu}
            sx={{ display: { xs: "flex", md: "none" } }}
            dir="rtl"
          >
            <MenuList>
              {pages.map((page) => (
                <MenuItem key={page.link} onClick={handleOpenMenu}>
                  {page.text}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default MobileMenu;
