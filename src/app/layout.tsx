import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserSessionProvider from "@/context/UserSessionProvider";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auction Platform",
  description: "Auction Platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        
        <UserSessionProvider session={session}>
          {/* <Navbar /> */}
          {children}
        </UserSessionProvider>
      </body>
    </html>
  );
}
