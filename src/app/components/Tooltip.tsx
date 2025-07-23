"use client";

import React, { ReactNode, useState } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

export default function Tooltip({ children, text }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full mb-2 w-max max-w-xs rounded bg-gray-800 px-2 py-1 text-xs text-white shadow-lg z-10">
          {text}
        </div>
      )}
    </div>
  );
}
