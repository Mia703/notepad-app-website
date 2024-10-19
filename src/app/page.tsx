import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

export default function Home() {
	return (
		<div className="page-container col-span-4">
			<Navigation current={"home"} />
			<section id="header"></section>
		</div>
	);
}
