"use client";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import React, { useState } from "react";

interface NavigationProps {
  current: String;
}

const NavigationList = [
  {
    key: 1,
    name: "Home",
    slug: "home",
    link: "/",
  },
  {
    key: 2,
    name: "About",
    slug: "about",
    link: "#",
  },
  {
    key: 3,
    name: "Help Center",
    slug: "help",
    link: "/pages/help",
  },
];

const Navigation: React.FC<NavigationProps> = ({ current }) => {
  // open and close mobile menu
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {NavigationList.map((navItem) => (
          <ListItem key={navItem.key} disablePadding>
            <Link href={navItem.link} passHref className="w-full">
              <ListItemButton LinkComponent={"a"}>
                <ListItemText primary={navItem.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // opens the dropdown menu for the download button
  const [buttonAnchor, setButtonAnchor] = useState<null | HTMLElement>(null);
  const openDropDown = Boolean(buttonAnchor);
  const handleDropDownOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setButtonAnchor(event.currentTarget);
  };

  const handleDropDownClose = () => {
    setButtonAnchor(null);
  };

  return (
    <nav
      id="main-navigation"
      className="flex flex-row items-center justify-between"
    >
      <Box id="logo">
        <Link href={"/"}>Notepadd</Link>
      </Box>
      <Box className="mobile-menu-container lg:hidden">
        <IconButton
          id="mobile-menu-toggle"
          aria-label="mobile menu toggle"
          size="large"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          {DrawerList}
        </Drawer>
      </Box>
      <Box className="desktop-menu-container hidden py-4 lg:inline-flex lg:items-center">
        {NavigationList.map((navItem) => {
          return (
            <Link
              key={navItem.key}
              href={navItem.link}
              className={
                current == navItem.slug
                  ? "mx-4 border-b-2 border-solid border-[#E054B9]"
                  : "mx-4 border-b-2 border-solid border-transparent transition duration-300 ease-in hover:border-[#E054B9]"
              }
            >
              {navItem.name}
            </Link>
          );
        })}
        <Button
          variant="contained"
          endIcon={<KeyboardArrowDownIcon />}
          size="medium"
          id="download-button"
          aria-label="download app dropdown"
          aria-controls={openDropDown ? "dropdown-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openDropDown ? "true" : undefined}
          onClick={handleDropDownOpen}
        >
          Download App
        </Button>
        <Menu
          id="dropdown-menu"
          anchorEl={buttonAnchor}
          open={openDropDown}
          onClose={handleDropDownClose}
          MenuListProps={{ "aria-labelledby": "download-button" }}
        >
          <MenuItem>iOS</MenuItem>
          <MenuItem>Android</MenuItem>
        </Menu>
      </Box>
    </nav>
  );
};

export default Navigation;