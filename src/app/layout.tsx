import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTop";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "HackHustle | IEEE SB NITD",
  description: "Join us for an incredible hackathon experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} bg-black`}>
        {children} <ScrollToTopButton />
      </body>
    </html>
  );
}
