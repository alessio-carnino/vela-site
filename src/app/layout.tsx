import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vela design — We design and build websites people actually remember.",
  description: "Vela is a small creative studio pairing design with no-code development.",
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
