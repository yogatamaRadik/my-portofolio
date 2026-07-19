import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ScrollReset } from "@/components/ui/ScrollReset";
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
    default: "Yogatama Radik — Mechatronics Engineer & Developer",
    template: "%s | Yogatama Radik",
  },
  description:
    "Portfolio of Yogatama Radik, a final-year Mechatronics Engineering student specializing in CNC machining, PLC programming, and industrial automation, now expanding into web development.",
  keywords: [
    "Yogatama Radik",
    "Mechatronics Engineer",
    "PLC Programming",
    "CNC Machining",
    "Portfolio",
  ],
  authors: [{ name: "Yogatama Radik" }],
  openGraph: {
    title: "Yogatama Radik — Mechatronics Engineer & Developer",
    description:
      "Portfolio showcasing mechatronics engineering projects, industrial automation experience, and software development.",
    url: "https://my-portofolio-six-smoky.vercel.app/",
    siteName: "Yogatama Radik Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function () {
            const stored = localStorage.getItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const isDark = stored ? stored === "dark" : prefersDark;
            if (isDark) document.documentElement.classList.add("dark");
          })();
        `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollReset />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}