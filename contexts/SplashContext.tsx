"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface SplashContextType {
  showSplash: boolean;
  enterSite: () => void;
}

const SplashContext = createContext<SplashContextType | undefined>(undefined);

interface SplashProviderProps {
  children: ReactNode;
}

export function SplashProvider({ children }: SplashProviderProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");
    if (!visited) setShowSplash(true);
  }, []);

  const enterSite = () => {
    sessionStorage.setItem("visited", "true");
    setShowSplash(false);
  };

  return (
    <SplashContext.Provider value={{ showSplash, enterSite }}>
      {children}
    </SplashContext.Provider>
  );
}

export const useSplash = () => {
  const context = useContext(SplashContext);
  if (context === undefined) {
    throw new Error("useSplash must be used within a SplashProvider");
  }
  return context;
};
