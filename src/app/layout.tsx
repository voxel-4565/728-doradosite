import type { Metadata } from "next";
import { DM_Sans, Inter, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const platinum = Mrs_Saint_Delafield({
  variable: "--font-platinum",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dorado Grove | Discover The Peak of Coastal Sophistication",
  description:
    "Dorado Grove - A luxury coastal development offering world-class amenities, refined living, and breathtaking views in Coconut Grove.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} ${platinum.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
