import { createContext, useState, useEffect } from "react";
import { isMobile as detectMobile } from "react-device-detect";

export const IsMobileViewContext = createContext();

export default function IsMobileViewProvider({ children }) {
  const [isMobile, setIsMobile] = useState(detectMobile);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(detectMobile);
    };
    checkIfMobile();
  }, []);

  return <IsMobileViewContext.Provider value={{ isMobile, setIsMobile }}>{children}</IsMobileViewContext.Provider>;
}
