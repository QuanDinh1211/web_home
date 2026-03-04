"use client";

import { LogoSVG } from "@/assets/icons";
import { useSplash } from "@/contexts/SplashContext";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const { showSplash } = useSplash();

  const [playOutro, setPlayOutro] = useState(false);

  const [hideIntroLogo, setHideIntroLogo] = useState(false);

  // Khi splash tắt → chạy animation out
  useEffect(() => {
    if (!showSplash) {
      setPlayOutro(true);
    }
  }, [showSplash]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-[5%] py-10 flex items-center justify-between">
      {/* Logo chính */}
      <div
        className={`absolute left-[4%] top-[70px] -translate-x-1 text-white text-3xl font-light tracking-wide  ${
          hideIntroLogo
            ? "animate-[logoMoveToHeader_1s_ease-in-out_forwards]"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <LogoSVG />
      </div>

      {/* Logo intro giữa màn */}
      {!hideIntroLogo && (
        <Image
          src="/images/logo.png"
          width={320}
          height={140}
          alt="Logo"
          onAnimationEnd={() => {
            if (!showSplash) {
              setHideIntroLogo(true);
            }
          }}
          className={`
            absolute
            left-1/2
            -translate-x-1/2
            ${playOutro ? "logo-intro-out" : "logo-intro"}
          `}
        />
      )}

      {/* Right side */}
      <div
        className={`
          absolute right-[4%] top-[70px] flex items-center gap-6 text-white text-sm font-medium
          transition-opacity duration-1000
          ${showSplash ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <div className="flex items-center gap-3">
          <p className="text-[1.375rem] leading-[22px] font-black underline text-white cursor-pointer transition-all duration-300">
            EN
          </p>
          <p className="text-[1.375rem] leading-[22px] text-white cursor-pointer transition-all duration-300 font-medium">
            KR
          </p>
        </div>

        <button className="flex flex-col gap-2">
          <div className="w-6 h-[2px] bg-white"></div>
          <div className="w-6 h-[2px] bg-white"></div>
        </button>
      </div>
    </header>
  );
}
