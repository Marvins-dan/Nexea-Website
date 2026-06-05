import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXEA | Microfinance Meets Blockchain Utility",
  description: "To make digital finance accessible, rewarding, and borderless through blockchain-powered financial tools on the Stellar network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-white/20`}>
        {children}
      </body>
    </html>
  );
}
