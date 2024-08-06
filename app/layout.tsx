import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import es from '../public/locales/es.json';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin DriveX",
  description: "DriveX by Juan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={es}>
      <html lang="en">
        <body className={outfit.className}>
          <NextTopLoader />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
