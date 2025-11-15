import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// custom local fonts
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

// global metadata for the site
export const metadata: Metadata = {
  title: {
    default: "Next Frontend Template",
    template: "%s | ",
  },
  description:
    " is your all-in-one logistics partner, providing full-spectrum fulfillment solutions for businesses of every size—from startups to established enterprises. Whether you’re shipping your first order or scaling to thousands a day, we handle it all with precision and speed.",
  metadataBase: new URL("https://rapidflowfulfillment.com"),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
