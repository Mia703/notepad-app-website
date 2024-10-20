import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Notepad App",
	description: "A simple notepad app for all",
};

export const viewport: Viewport = {
	initialScale: 1,
	width: "device-width",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div
					id="main-grid"
					className="p-4 sm:grid sm:grid-cols-4 sm:gap-2 md:grid md:grid-cols-6 md:gap-4 lg:grid lg:grid-cols-12 lg:gap-4 xl:grid xl:grid-cols-12 xl:gap-4"
				>
					{children}
				</div>
			</body>
		</html>
	);
}
