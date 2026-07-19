import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divya Sri Vadapalli | Software Engineering & AI/ML Portfolio",
  description: "Portfolio of Divya Sri Vadapalli, a B.Tech Electronics and Communication (Honors) student at KL University with experience in Java, Spring Boot, PostgreSQL, Python, PyTorch, NLP, and production software development.",
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
