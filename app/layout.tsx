import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INFYUM — Free Conversion Audit for High-Ticket Brands",
  description: "Your funnel is costing you calls you already earned. Book a free conversion audit with Harshil Bhadani and INFYUM.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
