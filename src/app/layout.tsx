import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pranavmane.dev"),
  title: "Pranav Mane — Python Backend Developer",
  description:
    "Computer Engineering graduate focused on Python backend development, FastAPI, Django, REST APIs, PostgreSQL, authentication, and testing.",
  keywords: [
    "Pranav Mane",
    "Python Backend Developer",
    "Backend Engineer",
    "FastAPI",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "Software Engineer",
    "REST APIs",
    "Pune",
  ],
  authors: [{ name: "Pranav Bibhishan Mane" }],
  openGraph: {
    title: "Pranav Mane — Python Backend Developer",
    description:
      "Computer Engineering graduate focused on Python backend development, FastAPI, Django, REST APIs, PostgreSQL, authentication, and testing.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/pranav_headshot.jpg",
        width: 800,
        height: 1000,
        alt: "Pranav Bibhishan Mane — Python Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Mane — Python Backend Developer",
    description:
      "Computer Engineering graduate focused on Python backend development, FastAPI, Django, REST APIs, PostgreSQL, authentication, and testing.",
    images: ["/assets/pranav_headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#08090c] text-zinc-100 font-sans antialiased selection:bg-brand-cyan/20 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
