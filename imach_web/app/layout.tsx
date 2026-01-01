import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Imach.ai - Autonomous AI Systems for Modern Businesses",
  description: "Build intelligent websites, data dashboards, and growth engines with Imach.ai. From MVP development to enterprise solutions, we power innovation for startups and Fortune 500 companies.",
  keywords: ["AI development", "MVP development", "AI chatbot", "custom dashboard", "startup technology", "enterprise AI"],
  authors: [{ name: "Imach.ai" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imach.ai",
    title: "Imach.ai - Autonomous AI Systems",
    description: "Build intelligent websites, data dashboards, and growth engines",
    siteName: "Imach.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imach.ai - Autonomous AI Systems",
    description: "Build intelligent websites, data dashboards, and growth engines",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
