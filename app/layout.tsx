import "./globals.css";
import Image from "next/image";
import { RoutingView } from "./routingView";
import { Noto_Sans_JP, Inter } from "next/font/google";
import { ReactNode } from "react";

export const notojp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${notojp.className} ${inter.className} flex flex-col w-[100%] m-auto m-full min-h-[100vh] font-light`}
      >
        <header className="mb-14">
          <RoutingView />
        </header>
        {children}
        <div className="fixed w-full h-screen z-[-1]">
          <Image
            className="z-[-1] fixed"
            src="/Night.webp"
            fill={true}
            objectFit="cover"
            alt="wallpaper"
          />
          <div className="absolute inset-0 bg-slate-900/50 z-0 backdrop-blur"></div>
        </div>
      </body>
    </html>
  );
}