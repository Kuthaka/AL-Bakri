import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Bakri | Premium Fresh Produce Supplier",
  description: "Freshness, with a purpose. From the source, delivered with care to your business.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { SmoothScroll } from "@/components/layout/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-ivory text-dark-green">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
