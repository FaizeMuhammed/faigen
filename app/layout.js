import { Inter } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/site/MotionProvider";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Faigen — AI agents for WhatsApp and Instagram",
  description:
    "Faigen is the AI agent that replies to your customers, takes orders and follows up on WhatsApp and Instagram — in English, Malayalam and Manglish. Live in 24–48 hours.",
  metadataBase: new URL("https://www.faigen.in"),
  openGraph: {
    title: "Faigen — AI agents for WhatsApp and Instagram",
    description: "Never miss a customer again. Replies, orders and follow-ups on WhatsApp and Instagram, in English, Malayalam and Manglish.",
    url: "https://www.faigen.in",
    siteName: "Faigen",
    type: "website",
  },
};

export const viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
