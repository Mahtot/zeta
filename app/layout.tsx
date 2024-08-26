import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Nunito, PT_Sans, Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });
const pt_sans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt_sans",
});

export const metadata: Metadata = {
  title: "Zeta Biotech",
  description: "Zeta Biotech website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
