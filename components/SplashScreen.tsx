"use client";

import { useSplash } from "@/contexts/SplashContext";
import { ReactNode, useEffect, useState } from "react";

interface SplashScreenProps {
  children: ReactNode;
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const { showSplash, enterSite } = useSplash();

  const handleEnter = () => {
    // start exit animation; actual enterSite() will be called after animation ends
    enterSite();
  };

  if (showSplash) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <section
          className="relative z-50 min-h-screen flex items-center justify-center text-center px-6 pt-[15%] animate fade-up"
          style={{
            transitionDelay: "1s",
          }}
        >
          <div className="max-w-4xl">
            {/* WE ARE */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-widest">
              <span className="inline-block transition-transform duration-300 hover:-translate-y-[45%] font-black text-7xl">
                W
              </span>
              <span className="inline-block transition-transform duration-300 hover:-translate-y-[45%] font-black text-7xl">
                E
              </span>
              <span className="inline-block transition-transform duration-300 hover:-translate-y-[45%] font-black text-7xl">
                {" "}
              </span>
              <span className="inline-block transition-transform duration-300 hover:-translate-y-[45%] font-black text-7xl">
                A
              </span>
              <span className="inline-block transition-transform duration-300 hover:-translate-y-[45%] font-black text-7xl">
                R
              </span>
              <span className="inline-block transition-transform duration-300 hover:-translate-y-[45%] font-black text-7xl">
                E
              </span>
              <span className="inline-block transition-transform duration-300 hover:-translate-y-[45%] font-black text-7xl">
                .
              </span>
              <span className="inline-block transition-transform duration-300 hover:-translate-y-[45%] font-black text-7xl">
                .
              </span>
              <span className="inline-block transition-transform duration-300 hover:-translate-y-[45%] font-black text-7xl">
                .
              </span>
            </h2>

            {/* Subtitle */}
            <p className="uppercase  font-semibold leading-relaxed mb-6 font-bold text-2xl">
              Innovating Business Transformation <br />
              Through Data, AI, and Salesforce Consulting
            </p>

            <p className="text-gray-300 mb-10">
              Achieve measurable success with Productized AI, Big Data insights.
            </p>

            {/* Button */}

            <button
              onClick={handleEnter}
              className="bg-white text-black rounded-full relative group overflow-hidden inline-block
              font-medium 
              shadow-[0_0_0.89px_rgb(255,255,255),0_0_1.79px_rgb(255,255,255),0_0_12.5px_rgb(255,255,255)]
              hover:scale-125 transition duration-600
              hover:shadow-[0_0_6.11px_rgb(167,108,205),0_0_12.21px_rgb(167,108,205),0_0_42.74px_rgb(167,108,205),0_0_85.48px_rgb(167,108,205),0_0_146.53px_rgb(167,108,205),0_0_256.44px_rgb(167,108,205)]
              hover:bg-[rgb(19,0,16)]
              "
            >
              <span
                className="
                flex
                px-6 py-3
                justify-center
                items-center
                text-[rgb(23,23,23)]
                cursor-pointer
                relative
                leading-none
                break-keep
                [mask-image:-webkit-radial-gradient(white,black)]
                bg-white
                rounded-[100px]
                overflow-hidden
                transition-colors
                duration-300
                hover:text-white

                after:content-['']
                after:absolute
                after:top-0
                after:left-[20%]
                after:w-[200%]
                after:h-[200%]
                after:rounded-[80%]
                after:bg-[rgb(19,0,16)]
                after:scale-0
                after:z-0
                after:transition-transform
                after:duration-1000
                after:ease-in-out
                hover:after:scale-200
                hover:after:opacity-100
                after:opacity-0
                after:transition-all
                "
              >
                <span className="relative z-10">Unlock your future</span>
              </span>
              {/* Overlay effect */}
              <div
                className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-500
                pointer-events-none
              "
              >
                {/* Small stars */}
                <div className="absolute top-[22%] left-[9%] w-[2px] h-[2px] rounded-full bg-white animate-pulse"></div>
                <div className="absolute bottom-[25%] left-[5%] w-[2px] h-[2px] rounded-full bg-white"></div>
                <div className="absolute top-[22%] right-[23%] w-[1px] h-[1px] rounded-full bg-white"></div>

                {/* Shooting stars */}
                <div
                  className="
                    absolute top-[-90%] left-[37%]
                    w-[36px] h-[1px]
                    bg-white rounded-full
                    animate-[shoot_1.2s_linear_infinite]
                  "
                ></div>

                <div
                  className="
                  absolute top-[-105%] right-[-25%]
                  w-[36px] h-[1px]
                  bg-white rounded-full
                  animate-[shoot_1.5s_linear_infinite]
                "
                ></div>

                {/* Glow orb */}
                <div
                  className="
                  absolute
                  top-[65%]
                  right-[-25%]
                  w-[88px]
                  h-[88px]
                  rounded-full
                  bg-white
                  shadow-[0_0_1.27px_rgb(152,86,194),0_0_2.53px_rgb(152,86,194),0_0_8.87px_rgb(152,86,194),0_0_17.74px_rgb(152,86,194),0_0_30.41px_rgb(152,86,194),0_0_53.22px_rgb(152,86,194)]
                "
                ></div>
              </div>
            </button>
          </div>
        </section>
      </div>
    );
  }

  return children;
}
