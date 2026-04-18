import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SplashScreen from "./components/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Сабақтар",
  description: "Мұғалімнің сабақ кітапханасы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)] antialiased bg-white">
        <SplashScreen />
        {/* Mobile warning */}
        <div className="flex lg:hidden h-screen w-screen flex-col items-center justify-center bg-white px-8 text-center gap-4">
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#497fff"/>
            <path d="M8 10C8 8.9 8.9 8 10 8H16V24H10C8.9 24 8 23.1 8 22V10Z" fill="white" opacity="0.9"/>
            <path d="M16 8H22C23.1 8 24 8.9 24 10V22C24 23.1 23.1 24 22 24H16V8Z" fill="white" opacity="0.6"/>
          </svg>
          <p className="text-[22px] font-semibold text-[#1a1a1a] tracking-tight">Сабақтар</p>
          <p className="text-[15px] text-[#5b5b5b] max-w-[280px] leading-snug">
            Бұл сайт тек компьютерде жұмыс істейді. Ноутбук немесе жұмыс үстелінен ашыңыз.
          </p>
          <p className="text-[13px] text-[#aaa]">This site is only available on desktop.</p>
        </div>

        {/* Desktop content */}
        <div className="hidden lg:block">
          {children}
        </div>
      </body>
    </html>
  );
}
