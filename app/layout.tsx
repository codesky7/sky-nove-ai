import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPLEX = IBM_Plex_Sans ({ subsets: ["latin"],
weight:['400', '500', '600', '600'],
variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Sky Nove AI Tools",
  description: "AI POWERED TOOLS BUNDLE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={cn('font-IBMPlex antialiased', IBMPLEX.variable)}>
        
        {children}
        
        </body>
    </html>
    </ClerkProvider>
  );
}
