import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import DisableDevTools from "@/components/DisableDevTools";
import MobileWarning from "@/components/MobileWarning";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qadoqdizayn.uz",
  description: "Professional qadoqlash dizayni xizmatlari",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased font-sans`}>
        <DisableDevTools />
        <MobileWarning />
        {children}
      </body>
    </html>
  );
}
