import Link from "next/link";
import "../globals.css";

export default function Footer() {
	return (
		<footer
			id="footer"
			className="flex flex-row justify-between items-middle text-[var(--dark-grey)] my-2 mt-4 sm:text-sm"
		>
			<div className="logo">
				<Link href={"/"} aria-label="notepad logo">Notepad</Link>
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
		</footer>
	);
}
