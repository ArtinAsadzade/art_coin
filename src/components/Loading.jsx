import { createPortal } from "react-dom";

export default function Loading() {
  return createPortal(
    <div
      className={`w-full h-svh fixed top-0 z-50 left-0  backdrop-blur-[7px] flex flex-col gap-3 justify-center items-center overflow-y-visible transition-all duration-500 bg-gradient-to-b from-primary to-secondary`}
    >
      <div className="spinner w-[90px] h-[90px]">
        <img src="/logo.webp" className="logo w-full object-cover" alt="Art Coin Logo" />
        <div className="circle w-[90px] h-[90px]"></div>
      </div>
      <h3 className="font-bold text-primary">Loading</h3>
    </div>,
    document.getElementById("modals-parent")
  );
}
