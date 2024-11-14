import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Container } from "../components/ui/container";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nusrat Jahan Papia - UI/UX Designer",
  description: "Portfolio of Nusrat Jahan Papia, a UI/UX Designer with over 4 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}