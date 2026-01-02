import type { Metadata } from "next";
import "./globals.css";
import React from "react";

import AuthContext from "@/components/AuthContext";
import HeaderWrapper from "@/components/HeaderWrapper";
import QueryWrapper from "@/components/QueryWrapper";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "3DynamicX",
  description: "Online Shop für 3D-gedruckte Vasen",
  icons: {
    icon: '/logo/logo.png', // Datei liegt dann in public/
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
        {children}
        <Footer />
      </QueryWrapper>
    </AuthContext>
    </body>
    </html>
  );
}
