import type { Metadata, Viewport } from "next";
import "./globals.css";
import ThemeProviderWrapper from "./ThemeProviderWrapper";

export const metadata: Metadata = {
  title: "Notepad App",
  description: "A simple notepad for all",
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
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
