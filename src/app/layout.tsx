import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeMeet",
  description: "Want to set a metting with a virtual assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
