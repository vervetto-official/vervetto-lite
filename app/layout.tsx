import type { Metadata } from "next";
import { Montserrat, Comfortaa } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat'
});
const comfortaa = Comfortaa({ 
  subsets: ["latin"],
  variable: '--font-comfortaa'
});

export const metadata: Metadata = {
  title: "Vervetto",
  description: "#1 Free NextJS Template in the World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${comfortaa.variable}`}>{children}</body>
    </html>
  );
}
