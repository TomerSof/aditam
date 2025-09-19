import React from "react";
import { Button, IconButton, Input, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LogoIcon from "../LogoIcon";

interface DesktopMenuProps {
  pages: { link: string; text: string }[];
}

export const DesktopMenu = ({ pages }: DesktopMenuProps) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", display: { xs: "none", md: "flex" } }}
      >
        {/* Search Bar for Desktop */}
        <Grid size={3}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            sx={{ display: { xs: "none", md: "flex" } }}
            spacing={1}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="search"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <SearchIcon sx={{ color: "text.primary" }} />
            </IconButton>
            <Input
              placeholder="Search..."
              sx={{
                display: { xs: "none", md: "flex" },
                color: "text.primary",
              }}
            />
          </Stack>
        </Grid>

        <Grid size={6}>
          {/* Logo and Links for Desktop */}
          <Stack
            direction="column"
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}
          >
            <Typography
              variant="h4"
              component="div"
              textAlign="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              Knowledge
            </Typography>
            {/* Desktop Menu Items */}
            <Stack direction="row" spacing={2} justifyContent={"center"}>
              {pages.map((page) => (
                <Button key={page.link} color="inherit">
                  {page.text}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid size={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Stack direction="row" spacing={1}>
            <IconButton
              sx={{ display: { xs: "none", md: "flex" } }}
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{ display: { xs: "none", md: "flex" } }}
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <MailOutlineIcon />
            </IconButton>
            <IconButton
              sx={{ display: { xs: "none", md: "flex" } }}
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              sx={{
                display: { xs: "none", md: "flex" },
              }}
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <LogoIcon sx={{ fontSize: 50 }} strokeWidth={5} />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
