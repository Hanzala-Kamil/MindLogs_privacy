"use client";

import { Globe } from "lucide-react";
import type { Language } from "@/lib/translations";

type LanguageSwitcherProps = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageSwitcher({ language, onChange }: LanguageSwitcherProps) {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full border border-[#9B87F5]/30 bg-white/90 px-2 py-1.5 shadow-lg shadow-[#9B87F5]/10 backdrop-blur-sm">
      <Globe className="ml-1 h-4 w-4 text-[#9B87F5]" aria-hidden />
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
          language === "en"
            ? "bg-gradient-to-r from-[#9B87F5] to-[#7c6ed4] text-white shadow-sm"
            : "text-gray-600 hover:bg-[#f3f0ff]/80 hover:text-gray-900"
        }`}
        aria-pressed={language === "en"}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => onChange("es")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
          language === "es"
            ? "bg-gradient-to-r from-[#9B87F5] to-[#7c6ed4] text-white shadow-sm"
            : "text-gray-600 hover:bg-[#f3f0ff]/80 hover:text-gray-900"
        }`}
        aria-pressed={language === "es"}
      >
        Español
      </button>
    </div>
  );
}
