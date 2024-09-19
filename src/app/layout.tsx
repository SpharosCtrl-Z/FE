import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Authprovider from "@/components/providers/Authproviders";
import "./globals.css";
import { getTopCategories } from "@/actions/initial/categoryActions";
import BottomTab from "@/components/layouts/BottomTab";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S.I.VILLAGE by Ctrl + Z",
  description: "Ctrl + Z's S.I.VILLAGE",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Authprovider>
          {children}
          <BottomTab />
        </Authprovider>
      </body>
    </html>
  );
}
