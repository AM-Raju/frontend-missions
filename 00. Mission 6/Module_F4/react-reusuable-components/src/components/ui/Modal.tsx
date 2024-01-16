import React, { MouseEvent, ReactNode, createContext, useContext, useRef } from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const ModalContext = createContext<TModalContext | null>(null);

type TModalContext = {
  onClose: () => void;
};

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type TCloseButton = {
  children?: ReactNode;
};

type THeader = TCloseButton;

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // console.log("current ref", containerRef.current);

  const handleOutsideClose = (e: MouseEvent) => {
    // console.log("TARGET", e.target);
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        onClick={handleOutsideClose}
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
      >
        <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md p-10 ">
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button className="" onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 bg-red-500 text-white rounded-md p-0.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return <div className="flex w-full justify-between items-center">{children}</div>;
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
