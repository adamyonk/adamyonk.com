import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "components/footer";
//import { JetBrains_Mono } from "next/font/google";
//import { Fira_Sans } from "next/font/google";
//
//export const jetbrains_mono = JetBrains_Mono({
//  subsets: ["latin"],
//  display: "swap",
//  variable: "--font-jetbrains-mono",
//});
//
//export const fira_sans = Fira_Sans({
//  subsets: ["latin"],
//  display: "swap",
//  weight: "400",
//  variable: "--font-fira-sans",
//});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        async
        defer
        data-domain="adamyonk.com"
        src="https://plausible.io/js/plausible.js"
      />
      <body
        //className={[fira_sans.variable, jetbrains_mono.variable].join(" ")}
      >
        <div className="min-h-screen">
          <main>
            <div className="container mx-auto px-5">{children}</div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

// <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
// <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />
// <link rel="webmention" href="https://webmention.io/adamyonk.com/webmention" />
// <link rel="pingback" href="https://webmention.io/adamyonk.com/xmlrpc" />

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Adam Jahnke ☕️🏍 (adamyonk)",
    template: "%s | Adam Jahnke",
  },
  verification: {
    me: [
      "https://github.com/adamyonk",
      "https://micro.blog/adamyonk",
      "https://reddit.com/u/adamyonk",
      "https://twitter.com/adamyonk",
      "https://hachyderm.io/@adamyonk",
      "https://bsky.app/profile/adamyonk",
    ],
  },
};
