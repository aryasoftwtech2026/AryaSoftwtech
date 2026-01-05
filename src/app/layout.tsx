import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/section/Footer";
import FloatingButtons from "@/components/section/FloatingBtn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Arya Softwtech - Professional Software Development Company",
    template: "%s | Arya Softwtech",
  },
  icons: {
    icon: '/favicon.png',  // ya '/image/my-logo.png'
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png', // optional for iPhone
  },
  description:
    "Arya Softwtech is a leading software development company specializing in custom web applications, mobile apps, UI/UX design, and digital solutions that drive business growth.",
  keywords:
    "software development, web development, mobile app development, custom software, Arya Softwtech, IT solutions, website design, app development India",
  authors: [{ name: "Arya Softwtech Team" }],
  creator: "Arya Softwtech",
  publisher: "Arya Softwtech",
  openGraph: {
    title: "Arya Softwtech - Innovative Software Solutions",
    description:
      "We build modern, scalable, and high-performance web & mobile applications for businesses worldwide.",
    url: "https://www.aryasoftwtech.com", // apna domain daal dena
    siteName: "Arya Softwtech",
    images: [
      {
        url: "/image/og-image.jpg", // optional: public folder mein OG image daal do
        width: 1200,
        height: 630,
        alt: "Arya Softwtech - Software Development Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Softwtech - Professional Software Company",
    description:
      "Custom web & mobile app development | Modern UI/UX | Scalable solutions",
    images: ["/image/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "6krQRzX0XBI95JTP6Ao7YOKkQt9uFf1z7BsEOaBrD6Q",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}