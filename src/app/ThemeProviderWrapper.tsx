"use client";
import "@fontsource-variable/inter";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./globals.css";

const Background = "#121212";
const DarkGrey = "#585858";
const MediumGrey = "#C1C1C1";
const LightGrey = "#E0E0E0";
const White = "#FFFFF";
const AccentPink = "#E054B9";

const theme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: Background,
			paper: DarkGrey,
		},
		primary: {
			main: AccentPink,
		},
		text: {
			primary: LightGrey,
		},
	},
	typography: {
		fontFamily: "Inter, Arial, sans-serif",
		h1: {
			textTransform: 'capitalize',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: "100000px",
					fontWeight: 'bold',
				},
			},
		},
	},
});

export default function ThemeProviderWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
