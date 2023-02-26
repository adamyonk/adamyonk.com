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
