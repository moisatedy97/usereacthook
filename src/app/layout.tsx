import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import { siteConfig } from "@/config/site";
import { type Viewport } from "next";
import { jsonLd } from "@/structured-data";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
  keywords: [
    "web",
    "developer",
    "programmer",
    "typescript",
    "javascript",
    "react",
    "stack",
    "server",
    "ssr",
    "nextjs",
    "sqlite",
    "shadcnui",
    "zod"
  ],
  alternates: {
    canonical: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url)
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
    siteName: siteConfig.title,
    locale: "en_US"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>{`${siteConfig.title} | ${siteConfig.description}`}</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={fontSans.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={true}>
          <div className="flex h-screen flex-col">
            <Navbar />
            <div className="container flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
