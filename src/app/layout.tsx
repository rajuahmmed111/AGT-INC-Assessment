import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientProviders from "@/shared/ClientProviders";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rapid Flow Fulfillment",
  description:
    "Flexible and affordable 3PL fulfillment for ecommerce, retail, and more. Contact Rapid Flow Fulfillment for tailored logistics solutions, real-time tracking, and top-tier service",
  metadataBase: new URL("https://rapidflowfulfillment.com"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
