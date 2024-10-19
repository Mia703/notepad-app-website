import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

export default function Home() {
	return (
		<div className="page-container col-span-4">
			<Navigation current={"home"} />
			<section
				id="header"
				className="flex flex-row justify-between align-middle"
			>
				<div className="left">
					<h1>
						All your notes, <span className="text-highlight">effortlessly</span>{" "}
						managed
					</h1>
					<p className="w-2/3 my-4">
						Staying organised shouldn't slow you down. Notepad is designed for
						busy people who need a quick, discreet way to manage their thoughts,
						tasks, and ideas.
					</p>
					<div className="button-container">
						<Button
							variant="contained"
							startIcon={<AppleIcon />}
							className="button-pink capitalize font-medium mx-2 ml-0"
							aria-label="apple app store download"
						>
							Apple App Store
						</Button>

						<Button
							variant="contained"
							startIcon={<GoogleIcon />}
							className="button-pink capitalize font-medium mx-2"
							aria-label="google app store download"
						>
							Google Play Store
						</Button>
					</div>
				</div>
				<div className="right">
					<div className="img-container w-36 h-36 bg-red-500"></div>
				</div>
			</section>
			<section id="features">
				<h2 className="text-center">Designed for Speed and Simplicity</h2>
				<div className="features-container grid grid-cols-3 text-center gap-4">
					<div className="feat">
						<img src="" alt="" />
						<h3>Instant Search</h3>
						<p>
							Find your notes in seconds, no matter how many you've created.
						</p>
					</div>
					<div className="feat">
						<img src="" alt="" />
						<h3>Discreet Interface</h3>
						<p>
							Keep your focus on what matters. Your notes are easily accessible
							but remain out of the way until you need them.
						</p>
					</div>
					<div className="feat">
						<img src="" alt="" />
						<h3>Mobile-Online Convenience</h3>
						<p>
							Notepad is optimised for on-the-go note taking for Android and
							iPhone. Ensuring your ideas are always at your fingertips.
						</p>
					</div>
				</div>
			</section>
			<section
				id="call-to-action"
				className="bg-[var(--dark-grey)] p-4 text-center rounded-xl"
			>
				<h1>Try Notepad today</h1>
				<p>
					Start simplifying your life today with Notepad -{" "}
					<span className="italic">where efficiency meets ease</span>.
				</p>
				<div className="buttons-container">
					<Button
						variant="contained"
						startIcon={<AppleIcon />}
						className="mx-2"
					>
						iOS
					</Button>
					<Button
						variant="contained"
						startIcon={<GoogleIcon />}
						className="mx-2"
					>
						Android
					</Button>
				</div>
			</section>
			<Footer />
		</div>
	);
}
