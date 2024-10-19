"use client";
import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Navigation from "./components/navigation";
import Image from "next/image";
import Footer from "./components/footer";

export default function Home() {
	return (
		<div className="page-container sm:col-span-4 md:col-span-6 lg:col-span-12 xl:col-span-12">
			<Navigation current={"home"} />
			<section
				id="header"
				className="md:grid md:grid-cols-2 md:gap-4 md:items-center"
			>
				<div className="header">
					<h1>
						All your notes, <span className="text-highlight">effortlessly</span>{" "}
						managed
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
							className="button-pink my-2 mr-2"
							aria-label="apple app store download button"
						>
							Apple App Store
						</Button>
						<Button
							variant="contained"
							startIcon={<GoogleIcon />}
							size="medium"
							className="button-pink my-2"
							aria-label="google play download button"
						>
							Google Play Store
						</Button>
					</div>
				</div>
				<div className="image">
					<Image
						src="/public/mobile-home-screen.png"
						alt="Screenshot of the Notepad app's home screen, featuring a clean, minimalist interface with a quick search bar at the top, a list of recent notes, and options for creating new notes"
						width={800}
						height={500}
						layout="responsive"
					/>
				</div>
			</section>

			<section id="features" className="text-center my-4 py-4">
				<h2 className="mb-4">Designed for Speed & Simplicity</h2>
				<div className="features md:grid md:grid-cols-3 md:gap-4">
					<div className="feature">
						<div className="image">
							<Image
								src="/public/mobile-search-screen.png"
								alt="Screenshot of the Notepad app's instant search bar displaying search results based on relevant keywords"
								width={800}
								height={500}
								layout="responsive"
							/>
						</div>
						<div className="content">
							<h3 className="mb-2">Instant Search</h3>
							<p>
								Quickly find notes as you type with your responsive search bar,
								ensuring you never lose track of important information.
							</p>
						</div>
					</div>
					<div className="feature">
						<div className="image">
							<Image
								src="/public/mobile-filter-1--screen.png"
								alt="Screenshot of the Notepad app's dropdown menu, allowing users to filter notes by time or date, with options such as 'Time' or 'Date'"
								width={800}
								height={500}
								layout="responsive"
							/>
						</div>
						<div className="content">
							<h3 className="mb-2">Filter by Time or Date</h3>
							<p>
								Easily organise your notes by filtering the based on the time or
								date they were created or modified, giving you quick access to
								relevant content.
							</p>
						</div>
					</div>
					<div className="feature">
						<div className="image">
							<Image
								src="/public/mobile-filter-2-screen.png"
								alt="Screenshot of the Notepad app's customisable tags, allowing users organise and categorise notes by tags"
								width={800}
								height={500}
								layout="responsive"
							/>
						</div>
						<div className="content">
							<h3 className="mb-2">Tagging System</h3>
							<p>
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
					<h1>Try notepad today</h1>
					<p>
						Start simplifying your life today with Notepad - where efficiency
						meets ease.
					</p>
					<div className="button my-2 mt-8">
						<Button
							variant="contained"
							startIcon={<AppleIcon />}
							size="medium"
							className="button-pink my-2 mr-2"
							aria-label="apple app store download button"
						>
							Apple App Store
						</Button>
						<Button
							variant="contained"
							startIcon={<GoogleIcon />}
							size="medium"
							className="button-pink my-2"
							aria-label="google play download button"
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
