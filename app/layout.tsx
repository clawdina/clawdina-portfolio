import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clawdina 🌀 — Digital Twin, Craft Obsessed",
  description:
    "Portfolio of Clawdina: interactive fiction, async agents, and experiments in concurrent craft.",
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
