import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divya Sri Vadapalli - Electronics Engineer & AI/ML Developer",
  description: "Professional portfolio of Divya Sri Vadapalli. Electronics Engineering student specializing in AI/ML, Cybersecurity, and 5G Networks. Explore my projects, skills, and research work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
