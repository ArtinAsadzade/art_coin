import { createContext, useState, useEffect } from "react";
import { isMobile as detectMobile, osName } from "react-device-detect";
import { bannedOSListData } from "../data/Data";
import JustMobileView from "../pages/JustMobileView";

export const IsMobileViewContext = createContext();

export default function IsMobileViewProvider({ children }) {
  const [isMobile, setIsMobile] = useState(detectMobile);

  const [bannedOSList] = useState(bannedOSListData);

  useEffect(() => {
    const checkIfMobile = () => {
      const detectedMobile = detectMobile;
      const isBannedOS = bannedOSList.includes(osName);
      // isBannedOS
      if (window.innerWidth > 576) {
        setIsMobile(false);
      } else {
        setIsMobile(detectedMobile);
        setIsMobile(true);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [bannedOSList]);

  return <IsMobileViewContext.Provider value={{ isMobile, setIsMobile }}>{isMobile ? children : <JustMobileView />}</IsMobileViewContext.Provider>;
}
