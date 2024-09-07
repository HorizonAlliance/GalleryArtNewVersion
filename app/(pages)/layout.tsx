import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { FloatingDockDemo } from "../(partials)/FloatingDock";
import DarkModeToggle from "../(partials)/buttondarkmode";
import { ThemeProvider } from "../(partials)/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GalleryArts",
  description: "GalleryArts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          {children}
          <FloatingDockDemo />
        </body>
      </ThemeProvider>
    </html>
  );
}
