import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { clashDisplay } from "./fonts";
import "./globals.css";
import Navbar from "@/components/ui/shared/navbar";
import ReactQueryProvider from "./providers/ReactQueryProvider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIMAS",
  description: "African Independent Media Marketing & Advertising Sales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${clashDisplay.variable} antialiased`}>
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
