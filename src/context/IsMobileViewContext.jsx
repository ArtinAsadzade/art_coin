import { createContext, useState, useEffect } from "react";

export const IsMobileViewContext = createContext();

export default function IsMobileViewProvider({ children }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isDesktop = /Windows|Linux|Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent);

      setIsMobile(!isDesktop);
    };
    checkIfMobile();
  }, []);

  return <IsMobileViewContext.Provider value={{ isMobile, setIsMobile }}>{children}</IsMobileViewContext.Provider>;
}
