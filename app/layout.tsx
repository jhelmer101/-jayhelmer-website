import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jay Helmer | Health Tech Business Development",
  description:
    "VP of Strategic Alliances at AliveCor. Growth-minded BD executive with 15+ years driving partnerships in digital health — Teladoc, Livongo, Omada, WebMD, OptumHealth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
