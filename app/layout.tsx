import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shreeraam Ramachandran | Full Stack Software Engineer",
  description: "I am a Full Stack Software Engineer specializing in software architecting, cloud-based development and DevOps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/shreeraam.jpg"/>
      <GoogleAnalytics />
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-BRM7P1WP0B"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-BRM7P1WP0B');
        </script> */}
    </html>
  );
}
