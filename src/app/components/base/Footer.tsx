"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full p-6 mt-12 border-t border-gray-800 text-center text-sm text-gray-500">
      © {year ?? "2025"} MyPortfolio. All rights reserved.
    </footer>
  );
}
