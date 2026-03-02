"use client";

import { LogoSVG } from "@/assets/icons";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-[5%] py-10 flex items-center justify-between">
      {/* Logo */}
      <div className="text-white text-3xl font-light tracking-wide">
        <LogoSVG />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6 text-white text-sm font-medium">
        {/* Language */}
        <div className="flex items-center gap-3">
          <p
            className="
              text-[1.375rem]
              leading-[22px]
              font-black
              underline
              text-white
              cursor-pointer
              transition-all
              duration-300
              [text-shadow:0_0_3.78px_rgb(255,255,255),0_0_90.72px_rgb(255,255,255)]
            "
          >
            EN
          </p>
          <p
            className="
              text-[1.375rem]
              leading-[22px]
              text-white
              cursor-pointer
              transition-all
              duration-300
              font-medium
            "
          >
            KR
          </p>
        </div>

        {/* Menu icon */}
        <button className="flex flex-col gap-2">
          <div className="w-6 h-[2px] bg-white"></div>
          <div className="w-6 h-[2px] bg-white"></div>
        </button>
      </div>
    </header>
  );
}
