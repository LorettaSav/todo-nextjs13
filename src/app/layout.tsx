import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo Next App Example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-l from-orange-600 via-pink-600 to-red-600 
        text-white mx-auto p-5 m-5 w-1/2 text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
