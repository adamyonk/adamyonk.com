import type { Metadata } from "next";
import Script from "next/script";
import "styles/index.css";
import { JetBrains_Mono } from "next/font/google";
import Footer from "components/footer";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={jetbrains_mono.variable} lang="en">
      <Script
        async
        defer
        data-domain="adamyonk.com"
        src="https://plausible.io/js/plausible.js"
      />
      <body style={jetbrains_mono.style}>
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

export const metadata: Metadata = {
  title: {
    default: "Adam Jahnke ☕️🏍 (adamyonk)",
    template: "%s | Adam Jahnke",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    me: [
      "https://github.com/adamyonk",
      "https://micro.blog/adamyonk",
      "https://reddit.com/u/adamyonk",
      "https://twitter.com/adamyonk",
      "https://hachyderm.io/@adamyonk",
    ],
  },
};
