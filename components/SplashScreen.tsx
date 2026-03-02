"use client";

import { ReactNode, useEffect, useState } from "react";

interface SplashScreenProps {
  children: ReactNode;
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const isVisited = sessionStorage.getItem("visited");

    if (!isVisited) {
      setShowSplash(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("visited", "true");
    setShowSplash(false);
  };

  if (showSplash) {
    return (
      <div className="fixed inset-0 flex items-center justify-center  text-white z-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">
            Chào mừng anh đến website 🚀
          </h1>
          <button
            onClick={handleEnter}
            className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition"
          >
            Vào trang chủ
          </button>
        </div>
      </div>
    );
  }

  return children;
}
