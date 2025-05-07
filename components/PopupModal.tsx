// components/PopupModal.tsx
"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PopupModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ children, isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/50 flex justify-center items-start pt-[100px]">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full text-center">
        {children}
        <div className="mt-4">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 underline hover:text-gray-800"
          >
          
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PopupModal;
