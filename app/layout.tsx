import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHead  from "./(componets)/TopHead"
import InfoBar from './(componets)/InfoBar'
import Script from "next/script";
import Head from "next/head";
import Map from "./(componets)/Map"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Track IPs",
  description: "Generated by create next app",
};

export default function RootLayout({

  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="apple-touch-icon" href="../public/icon.png" sizes="any" />
      </Head>
      <body>
      {children}
      </body>
    </html>
  );
}
