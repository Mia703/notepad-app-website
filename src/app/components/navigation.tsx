"use client";
import "../globals.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface NavigationProps {
	current: String;
}

const Navigation: React.FC<NavigationProps> = ({ current }) => {
	const spacing = "mx-4";

	return (
		<nav
			id="navigation"
			className="flex flex-row justify-between items-center mb-4"
		>
			<div className="logo">
				<Link href={"/"} className="font-semibold">
					Notepad
				</Link>
			</div>
			<div className="links-container">
				<Link
					href={"/"}
					className={`${spacing} ${
						current == "home"
							? "border-b-2 border-solid border-[var(--pink)]"
							: ""
					}`}
				>
					Home
				</Link>
				<Link
					href={"#"}
					className={`${spacing} ${
						current == "about"
							? "border-b-2 border-solid border-[var(--pink)]"
							: ""
					}`}
				>
					About
				</Link>
				<Link
					href={"#"}
					className={`${spacing} ${
						current == "help"
							? "border-b-2 border-solid border-[var(--pink)]"
							: ""
					}`}
				>
					Help Centre
				</Link>
				<Button
					variant="contained"
					endIcon={<KeyboardArrowDownIcon />}
					className="button-pink"
					aria-label="download app dropdown"
				>
					Download
				</Button>
			</div>
		</nav>
	);
};

export default Navigation;
