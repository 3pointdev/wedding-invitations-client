import type { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import "src/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const ahnchangho = localFont({
  src: "../public/fonts/Ahnchangho.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-ahnchangho",
});

export const metadata: Metadata = {
  title: "Wedding For JunSu & SunYoung",
  description:
    "This is a wedding invitation for Jang Junsu and Yang Sunyoung! Thank you for your attention.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.className} ${ahnchangho.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
