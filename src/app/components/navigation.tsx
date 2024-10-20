"use client";
import "../globals.css";
import Button from "@mui/material/Button";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

interface NavigationProps {
	current: String;
}

const Navigation: React.FC<NavigationProps> = ({ current }) => {
	// open and close mobile menu drawer
	const [open, setOpen] = useState(false);
	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const MobileMenu = (
		<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
			<List>
				<ListItem disablePadding>
					<Link href={"/"} passHref className="w-full">
						<ListItemButton
							LinkComponent={"a"}
							sx={{
								"&:hover": {
									backgroundColor: "#12121260",
								},
							}}
						>
							<ListItemText primary="Home" />
						</ListItemButton>
					</Link>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton
						sx={{
							"&:hover": {
								backgroundColor: "#12121260",
							},
						}}
					>
						<ListItemText primary="About" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<Link href={"/pages/help"} passHref className="w-full">
						<ListItemButton
							LinkComponent={"a"}
							sx={{
								"&:hover": {
									backgroundColor: "#12121260",
								},
							}}
						>
							<ListItemText primary="Help Center" />
						</ListItemButton>
					</Link>
				</ListItem>
			</List>
		</Box>
	);

	// open and close dropdown menu on desktop
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const dropdownOpen = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<nav
			id="main-navigation"
			className="flex flex-row justify-between items-center mb-4"
		>
			<div className="logo">
				<Link href={"#"} className="font-semibold" aria-label="notepad logo">
					Notepad
				</Link>
			</div>
			<div className="menu text-right">
				<div className="menu mobile md:hidden">
					<IconButton
						aria-label="mobile menu toggle"
						size="large"
						onClick={toggleDrawer(true)}
					>
						<MenuIcon className="text-white" />
					</IconButton>
					<Drawer
						open={open}
						onClose={toggleDrawer(false)}
						anchor="right"
						sx={{
							"& .MuiDrawer-paper": {
								backgroundColor: "var(--dark-grey)",
								color: "var(--light-grey)",
							},
						}}
					>
						{MobileMenu}
					</Drawer>
				</div>
				<div className="menu desktop hidden md:block">
					<div className="container flex flex-row justify-between items-center">
						<Link
							href={"/"}
							className={
								current == "home"
									? "border-b-2 border-solid border-[var(--pink)] mx-4"
									: "border-b-2 border-solid border-[var(--background)] transition ease-in-out duration-300 hover:border-[var(--pink)] mx-4"
							}
						>
							Home
						</Link>
						<Link
							href={"#"}
							className={
								current == "about"
									? "border-b-2 border-solid border-[var(--pink)] mx-4"
									: "border-b-2 border-solid border-[var(--background)] transition ease-in-out duration-300 hover:border-[var(--pink)] mx-4"
							}
						>
							About
						</Link>
						<Link
							href={"/pages/help"}
							className={
								current == "help"
									? "border-b-2 border-solid border-[var(--pink)] mx-4"
									: "border-b-2 border-solid border-[var(--background)] transition ease-in-out duration-300 hover:border-[var(--pink)] mx-4"
							}
						>
							Help Center
						</Link>
						<Button
							variant="contained"
							endIcon={<KeyboardArrowDownIcon />}
							size="medium"
							id="basic-button"
							aria-label="download app dropdown menu"
							aria-controls={dropdownOpen ? "basic-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={dropdownOpen ? "true" : undefined}
							onClick={handleClick}
							sx={{
								backgroundColor: "var(--pink)",
								borderRadius: "10000px",
								fontWeight: "600",
							}}
						>
							Download App
						</Button>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={dropdownOpen}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
						>
							<MenuItem onClick={handleClose}>iOS</MenuItem>
							<MenuItem onClick={handleClose}>Android</MenuItem>
						</Menu>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
