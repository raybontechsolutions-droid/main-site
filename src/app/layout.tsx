import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Raybon Tech Solutions | Build, Rank, Automate & Scale Your Digital Presence",
  description:
    "From robust full-stack web applications to AI-powered WhatsApp chatbots and organic SEO domination — we provide the full-cycle technical backbone for modern high-growth companies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${grotesk.variable}`}>
      <body className="min-h-screen">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
