import { Inter } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import { Providers } from "@/redux/provider";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Starfund Store",
  description: "Variety at one click",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
