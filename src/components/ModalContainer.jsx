import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ModalContainer({ children, open, setOpen, className }) {
  const showHandler = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [open]);

  return createPortal(
    <div
      className={`w-full h-screen fixed top-0 z-50 left-0 p-3 backdrop-blur-sm flex justify-center items-center overflow-y-visible transition-all duration-500   ${
        open ? "opacity-500 visible" : "opacity-0 invisible"
      }`}
    >
      <div className={`bg-secondary max-w-[570px] shadow-xl text-primary w-full rounded-lg py-10 px-5 relative ${className ? className : ""}`}>
        <XMarkIcon className="w-7 cursor-pointer absolute top-2 left-2" onClick={showHandler} />
        {children}
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
