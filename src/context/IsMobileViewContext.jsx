import { createContext, useState, useEffect } from "react";

export const IsMobileViewContext = createContext();

export default function IsMobileViewProvider({ children }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const platform = navigator.platform;

      const isWindows = /Win(dows)?/.test(platform);
      const isMac = /Mac(intosh|Intel|PPC|68K)/.test(platform);
      const isLinux = /Linux/.test(platform);

      const isAndroid = /Android/.test(userAgent);
      const isIOS = /iPhone|iPad|iPod/.test(userAgent);

      const isDesktop = isWindows || isMac || isLinux;
      const isMobile = isAndroid || isIOS;

      setIsMobile(isMobile && !isDesktop);
    };
    checkIfMobile();
  }, []);

  return <IsMobileViewContext.Provider value={{ isMobile, setIsMobile }}>{children}</IsMobileViewContext.Provider>;
}
