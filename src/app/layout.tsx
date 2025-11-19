import type { Metadata } from "next";
import { Libre_Baskerville, Open_Sans } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "NUCLEI",
  description: "Consultoría política y comunicación",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${libreBaskerville.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
