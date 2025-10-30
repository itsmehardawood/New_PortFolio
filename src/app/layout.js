import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dawood Ayub - Portfolio",
  description: "Welcome to my portfolio website showcasing my projects and skills.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Navbar/>
        {children}
      </body>
    </html>
  );
}
