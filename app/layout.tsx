import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "NEXEA | Finance Without Borders",
  description: "NEXEA combines payments, blockchain utility, rewards, and digital assets into one seamless ecosystem powered by Stellar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className={`font-inter bg-nexea-gray text-nexea-navy antialiased selection:bg-nexea-blue/20 selection:text-nexea-navy`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
