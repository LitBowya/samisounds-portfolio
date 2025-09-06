import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ReactNode} from "react";
import Navbar from "@/components/Navbar";

const bebas = localFont({
  src: [
      {path: './fonts/Bebas.ttf'},
  ],
    variable: '--font-bebas'
});

const csqinetic = localFont({
    src: [
        {path: './fonts/CSQinetic.otf'}

    ],
    variable: '--font-qinetic'
});

const poppins = localFont({
    src: [
        {path: './fonts/Poppins-Black.ttf', weight: '900'},
        {path: './fonts/Poppins-Bold.ttf', weight: '750'},
        {path: './fonts/Poppins-Medium.ttf', weight: '600'},
        {path: './fonts/Poppins-Regular.ttf', weight: '500'},
        {path: './fonts/Poppins-Light.ttf', weight: '350'},
    ],
    variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Sound Portfolio",
  description: "Sound Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${csqinetic.variable} ${bebas.variable} ${poppins.variable} ${poppins.className} antialiased overflow-x-hidden`}
      >
        {children}
      <Navbar />
      </body>
    </html>
  );
}
