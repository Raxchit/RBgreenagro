import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RB GREEN AGRO BANGYA INDUSTRIES PVT LTD - Premium Fertilizers & Agricultural Solutions in Nepal",
  description: "RB GREEN AGRO BANGYA INDUSTRIES PVT LTD provides high-quality fertilizers and agricultural solutions for farmers in Nighad, Nepal. Your trusted partner for organic, NPK fertilizers, and micronutrients.",
  keywords: ["RB GREEN AGRO BANGYA INDUSTRIES PVT LTD", "Fertilizers", "Agriculture", "Nepal", "Nighad", "Organic Fertilizers", "NPK", "Farm Supplies", "Agricultural Products"],
  authors: [{ name: "RB GREEN AGRO BANGYA INDUSTRIES PVT LTD Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "RB GREEN AGRO BANGYA INDUSTRIES PVT LTD - Premium Fertilizers & Agricultural Solutions",
    description: "Your trusted partner for high-quality fertilizers in Nepal",
    url: "https://rbagro.com",
    siteName: "RB GREEN AGRO BANGYA INDUSTRIES PVT LTD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RB GREEN AGRO BANGYA INDUSTRIES PVT LTD - Premium Fertilizers",
    description: "Empowering agriculture in Nepal with quality fertilizers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
