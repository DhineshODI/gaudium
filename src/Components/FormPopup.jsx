import { useEffect } from "react";

export default function FormPopup({ open, onClose, children }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative z-10 w-[90%] max-w-lg rounded-2xl bg-white p-6
          transform transition-all duration-300
          animate-modalIn
        "
      >
        {children}

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
