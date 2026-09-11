import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import { StarsBackground } from "@/components/StarsBackground";
import { SocialSidebar } from "@/components/SocialSidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza El Belghiti | Data & AI Engineer",
  description:
    "Data & AI Engineer at Airbus. I build data pipelines, AI systems, and dashboards that drive real business decisions.",
  metadataBase: new URL("https://hamagistral.dev"),
  openGraph: {
    title: "Hamza El Belghiti | Data & AI Engineer",
    description:
      "Data & AI Engineer at Airbus. I build data pipelines, AI systems, and dashboards.",
    url: "https://hamagistral.dev",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.setAttribute("data-theme","light");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <StarsBackground />
        <CustomCursor />
        <SocialSidebar />
        {children}
      </body>
    </html>
  );
}
