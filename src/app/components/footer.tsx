import Link from "next/link";
import "../globals.css";

export default function Footer() {
	return (
		<nav
			id="footer"
			className="flex flex-row justify-between items-middle text-[var(--dark-grey)]"
		>
			<div className="logo">
				<Link href={"/"}>Notepad</Link>
			</div>
			<div className="links">
				<Link href={"#"} className="mx-2">
					About
				</Link>
				<Link href={"#"} className="mx-2">
					Help Centre
				</Link>
				<Link href={"#"} className="mx-2">
					Contact Us
				</Link>
			</div>
		</nav>
	);
}
