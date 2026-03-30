import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infyum — Free Conversion Audit for High-Ticket Coaches & Consultants",
  description:
    "Your funnel is costing you calls you already earned. Harshil Bhadani reviews your funnel and shows you exactly where trust drops, value weakens, and booked calls get harder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <body
        style={{
          fontFamily: "var(--font-body), system-ui, sans-serif",
          backgroundColor: "var(--color-bg-base)",
          color: "var(--color-text-primary)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
