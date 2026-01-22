import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Malay Raval | Fullstack Developer & DevOps Engineer",
    template: "%s | Malay Raval",
  },
  description:
    "Portfolio of Malay Raval - Expert Fullstack Developer & DevOps Engineer specializing in Next.js, React, Node.js, and Cloud Infrastructure. transforming ideas into scalable web applications.",
  keywords: [
    "Malay Raval",
    "Malay Raval Developer",
    "Malay Raval Portfolio",
    "Fullstack Developer",
    "DevOps Engineer",
    "Next.js Developer",
    "React Developer",
    "Web Development",
    "Software Engineer India",
    "My Portfolio",
  ],
  authors: [{ name: "Malay Raval" }],
  creator: "Malay Raval",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://malayraval.com", // Replace with actual domain if known, otherwise placeholder or user can update
    title: "Malay Raval | Fullstack Developer & DevOps Engineer",
    description:
      "Explore the portfolio of Malay Raval, a passionate Fullstack Developer and DevOps Engineer building high-performance web solutions.",
    siteName: "Malay Raval Portfolio",
    images: [
      {
        url: "/images/og-image.png", // Ensure an OG image exists or use a default
        width: 1200,
        height: 630,
        alt: "Malay Raval Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malay Raval | Fullstack Developer & DevOps Engineer",
    description:
      "Portfolio of Malay Raval - Fullstack & DevOps Developer. Check out my projects and skills.",
    creator: "@malay_raval",
    images: ["/images/og-image.png"],
  },
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
