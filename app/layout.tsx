import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import { SplashProvider } from "@/contexts/SplashContext";
import Header from "@/components/Header";

const notoSans = Noto_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "APP DEMO",
  description: "App này dùng để demo cách sử dụng Next.js 13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body className="font-sans relative text-white overflow-x-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay tối nhẹ */}
        <div className="fixed inset-0 bg-black/20 -z-10" />
        <SplashProvider>
          <Header />
          <SplashScreen>{children}</SplashScreen>
        </SplashProvider>
      </body>
    </html>
  );
}
