import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

export default function Home() {
	return (
		<div className="page-container col-span-4">
			<Navigation current={"home"} />
			<section id="header">
				<div className="left">
					<h1>
						All your notes <span>effortlessly</span> managed
					</h1>
					<p>
						Staying organised shouldn't slow you down. Notepad is designed for
						busy people who need a quick, discreet way to manage their thoughts,
						tasks, and ideas.
					</p>
					<div className="button-container">
						<Button
							variant="contained"
							startIcon={<AppleIcon />}
							className="capitalize font-medium"
							sx={{
								backgroundColor: "var(--primary-accent-pink)",
								borderRadius: "10000px",
								fontWeight: "600",
							}}
						>
							Apple App Store
						</Button>

						<Button
							variant="contained"
							startIcon={<GoogleIcon />}
							className="capitalize font-medium"
							sx={{
								backgroundColor: "var(--primary-accent-pink)",
								borderRadius: "10000px",
								fontWeight: "600",
							}}
						>
							Google Play Store
						</Button>
					</div>
				</div>
				<div className="right">{/* image */}</div>
			</section>
			<section id="features">
				<div className="feat">
					<img src="" alt="" />
					<h2>Instant Search</h2>
					<p>Find your notes in seconds, no matter how many you've created.</p>
				</div>
				<div className="feat">
					<img src="" alt="" />
					<h2>Discreet Interface</h2>
					<p>
						Keep your focus on what matters. Your notes are easily accessible
						but remain out of the way until you need them.
					</p>
				</div>
				<div className="feat">
					<img src="" alt="" />
					<h2>Mobile-Online Convenience</h2>
					<p>
						Notepad is optimised for on-the-go note taking for Android and
						iPhone. Ensuring your ideas are always at your fingertips.
					</p>
				</div>
			</section>
			<section id="call-to-action">
				<h1>Try Notepad today</h1>
				<p>
					Start simplifying your life today with Notepad -{" "}
					<span className="italic">where efficiency meets ease</span>.
				</p>
			</section>
			<Footer />
		</div>
	);
}
