"use client";
import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Navigation from "./components/navigation";
import Image from "next/image";
import homeScreen from "./public/assets/mobile-home-screen.svg";
import searchScreen from "./public/assets/mobile-search-screen.svg";
import filterByScreen from "./public/assets/mobile-filter-1-screen.svg";
import filterTagsScreen from "./public/assets/mobile-filter-2-screen.svg";
import Footer from "./components/footer";

export default function Home() {
	return (
		<div className="page-container sm:col-span-4 md:col-span-6 lg:col-span-12 xl:col-span-12">
			<Navigation current={"home"} />

			<section
				id="header"
				className="md:grid md:grid-cols-2 md:gap-4 md:items-center md:my-[3rem]"
			>
				<div className="header mb-8 lg:px-[5rem]">
					<h1 className="leading-none">
						All your notes, <br />{" "}
						<span className="text-highlight">effortlessly</span> managed
					</h1>
					<p className="py-4">
						Staying organised shouldn't slow you down. Notepad is designed for
						busy people who need a quick way to manage their thoughts, tasks,
						and ideas.
					</p>
					<div className="button">
						<Button
							variant="contained"
							startIcon={<AppleIcon />}
							size="medium"
							aria-label="apple app store download"
							sx={{
								backgroundColor: "var(--pink)",
								borderRadius: "10000px",
								fontWeight: "600",
								margin: "0.5rem 0 0.5rem",
								marginRight: "0.5rem",
							}}
						>
							Apple App Store
						</Button>
						<Button
							variant="contained"
							startIcon={<GoogleIcon />}
							size="medium"
							aria-label="google play download"
							sx={{
								backgroundColor: "var(--pink)",
								borderRadius: "10000px",
								fontWeight: "600",
								margin: "0.5rem 0 0.5rem",
							}}
						>
							Google Play Store
						</Button>
					</div>
				</div>
				<div className="image flex flex-row justify-center">
					<Image
						src={homeScreen}
						alt="Screenshot of the Notepad app's home screen, featuring a clean, minimalist interface with a quick search bar at the top, a list of recent notes, and options for creating new notes"
						className="lg:w-[38%] md:w-[70%]"
					/>
				</div>
			</section>

			<section id="features" className="text-center my-[4rem]">
				<h2>
					Designed for <br />
					<span className="text-highlight">Speed & Simplicity</span>
				</h2>
				<div className="features md:grid md:grid-cols-3 md:gap-4">
					<div className="feature my-[4rem]">
						<div className="image flex flex-row justify-center mb-6">
							<Image
								src={searchScreen}
								alt="Screenshot of the Notepad app's instant search bar displaying search results based on relevant keywords"
							/>
						</div>
						<div className="content flex flex-col justify-center items-center">
							<h3 className="mb-2">Instant Search</h3>
							<p className="">
								Quickly find notes as you type with your responsive search bar,
								ensuring you never lose track of important information.
							</p>
						</div>
					</div>
					<div className="feature my-[4rem]">
						<div className="image flex flex-row justify-center mb-6">
							<Image
								src={filterByScreen}
								alt="Screenshot of the Notepad app's dropdown menu, allowing users to filter notes by time or date, with options such as 'Time' or 'Date'"
							/>
						</div>
						<div className="content flex flex-col justify-center items-center">
							<h3 className="mb-2">Filter by Time or Date</h3>
							<p className="">
								Easily organise your notes by filtering the based on the time or
								date they were created or modified, giving you quick access to
								relevant content.
							</p>
						</div>
					</div>
					<div className="feature my-[4rem]">
						<div className="image flex flex-row justify-center mb-6">
							<Image
								src={filterTagsScreen}
								alt="Screenshot of the Notepad app's customisable tags, allowing users organise and categorise notes by tags"
							/>
						</div>
						<div className="content flex flex-col justify-center items-center">
							<h3 className="mb-2">Tagging System</h3>
							<p className="">
								Add customisable tags to your notes for efficient organisation,
								making it simple to categorise and retrieve notes based on
								topics or themes.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="call-to-action" className="text-center px-4">
				<div className="content bg-[var(--dark-grey)] rounded-xl p-12 mb-32">
					<h1 className="mb-2">Try notepad today</h1>
					<p>
						Start simplifying your life today with Notepad - where efficiency
						meets ease.
					</p>
					<div className="button my-2 mt-8">
						<Button
							variant="contained"
							startIcon={<AppleIcon />}
							size="medium"
							aria-label="apple app store download"
							sx={{
								backgroundColor: "var(--pink)",
								borderRadius: "1000px",
								fontWeight: "600",
								margin: "0.5rem 0 0.5rem",
								marginRight: "0.5rem",
							}}
						>
							Apple App Store
						</Button>
						<Button
							variant="contained"
							startIcon={<GoogleIcon />}
							size="medium"
							aria-label="google play download"
							sx={{
								backgroundColor: "var(--pink)",
								borderRadius: "1000px",
								fontWeight: "600",
								margin: "0.5rem 0 0.5rem",
							}}
						>
							Google Play Store
						</Button>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
