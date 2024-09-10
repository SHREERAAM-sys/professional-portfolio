"use client";
import React, { ReactNode } from 'react';

interface ShimmerButtonProps {
  children: ReactNode;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({ children }) => {
  return (
    <button className="inline-flex  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {children}
    </button>
  );
};

export default ShimmerButton;








