import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Portfolio of Nihar Ravi Majalikar, a Melbourne-based telecommunications and networking engineering graduate focused on IT support, network infrastructure, cloud systems, endpoint management, homelabs and automation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nihar Ravi Majalikar | Telecommunications and Network Engineer",
  description,
  alternates: { canonical: "/" },
  keywords: [
    "Nihar Ravi Majalikar",
    "network engineer Melbourne",
    "telecommunications engineer",
    "IT support",
    "network infrastructure",
    "cloud infrastructure",
    "endpoint management",
    "CCNA",
    "Proxmox homelab",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: "/",
    title: "Nihar Ravi Majalikar | Telecommunications and Network Engineer",
    description,
    siteName: "Nihar Majalikar Portfolio",
    images: [
      {
        url: "/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Nihar Majalikar engineering portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihar Ravi Majalikar | Telecommunications and Network Engineer",
    description,
    images: ["/og-portfolio.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#07111f" },
  ],
};

const themeScript = `
  try {
    const stored = localStorage.getItem('theme');
    const dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-AU" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
