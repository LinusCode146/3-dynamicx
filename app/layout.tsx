import type { Metadata } from "next";
import "./globals.css";
import React from "react";

import AuthContext from "@/components/Auth/AuthContext";
import HeaderWrapper from "@/components/Layout/HeaderWrapper";
import QueryWrapper from "@/components/QueryWrapper";
import Footer from "@/components/Layout/Footer";
import Filler from "@/components/Filler";

export const metadata: Metadata = {
  title: "3DynamicX",
  description: "Online Shop für 3D-gedruckte Vasen",
  icons: {
    icon: '/favicon.svg', // Datei liegt dann in public/
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

    <body>
    <AuthContext>
      <QueryWrapper>
        <HeaderWrapper />
        <Filler />
        <main>
          {children}
        </main>
        <Footer />
      </QueryWrapper>
    </AuthContext>
    </body>
    </html>
  );
}
