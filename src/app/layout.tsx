import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/base/Header";
import Main from "./components/base/Main";
import Footer from "./components/base/Footer";
import Client3DWrapper from "./components/Client3DWrapper";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio of React Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Client3DWrapper />
        <Header />
          <Main>
            {children}
          </Main>
        <Footer />
      </body>
    </html>
  );
}
