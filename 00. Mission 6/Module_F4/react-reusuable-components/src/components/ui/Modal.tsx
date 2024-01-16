import React, { MouseEvent, useRef } from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // console.log("current ref", containerRef.current);

  const handleOutsideClose = (e: MouseEvent) => {
    // console.log("TARGET", e.target);
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <div
      onClick={handleOutsideClose}
      className={cn(
        "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
        {
          visible: isOpen,
        }
      )}
    >
      <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md p-10">
        {children}
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = () => {
  return <button onClick={}>Close Button</button>;
};

Modal.CloseButton = CloseButton;

export default Modal;
