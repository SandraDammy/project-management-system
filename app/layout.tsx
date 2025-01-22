import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--fontManrope",
  preload: true,
});

export const metadata: Metadata = {
  title: "Project Management System App",
  description: "Project Management System for School Project",
  keywords:
    "project management, school project, final year project, Bsc project, Msc project, research project",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased min-h-screen`}
        style={{
          color: "var(--almostBlack)",
          backgroundColor: "var(--veryLightGray)",
        }}
      >
        {children || <div>Loading...</div>}{" "}
      </body>
    </html>
  );
}
