import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Toast({ icon, msg, show, setShow }) {
  const hideToast = () => {
    setShow((prev) => ({
      ...prev,
      show: false,
    }));
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow((prev) => ({
          ...prev,
          show: false,
        }));
      }, 5000);
    }
  }, [msg, setShow, show]);

  return createPortal(
    <div
      id="toast-default"
      className={`flex items-center justify-between w-full max-w-xs p-4 text-gray-500 bg-secondary rounded-lg fixed top-2 right-2 shadow transition-all duration-300 z-50 ${
        show ? "opacity-100 visible mr-0" : "opacity-0 invisible animate-slide-out-right -mr-96"
      }`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 bg-primary rounded-lg font-bold">{icon}</div>
      <div className="ms-3 text-sm font-bold text-primary">{msg}</div>
      <button
        type="button"
        className="-mx-1.5 -my-1.5 text-primary rounded-lg inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        onClick={hideToast}
      >
        <XMarkIcon className="w-5" />
      </button>
    </div>,
    document.getElementById("modals-parent")
  );
}
