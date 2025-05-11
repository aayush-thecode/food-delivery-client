
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/ui/layout";
import Providers from "@/providers/providers";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodie - Food Delivery App",
  description: "Fast, hot, and delicious food at your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
      >
        <Providers>

        <Layout>
          <div className="min-h-[100vh] mb-10">
        {children}
          </div>
        <Toaster/> {/* using Toaster*/}
        </Layout>                   
        </Providers>
      </body>
    </html>
  );
}