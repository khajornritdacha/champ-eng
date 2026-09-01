"use client";

import { useEffect, useRef, useState } from "react";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa6";

import {
  mentorIndustries,
  mentorIndustryLabels,
  type MentorIndustry,
} from "./mentors-data";

type IndustryFilterProps = {
  onToggleIndustry: (industry: MentorIndustry) => void;
  selectedIndustries: MentorIndustry[];
};

export function IndustryFilter({
  onToggleIndustry,
  selectedIndustries,
}: IndustryFilterProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnOutsidePointer(event: PointerEvent): void {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const ChevronIcon = isOpen ? FaChevronUp : FaChevronDown;

  return (
    <div className="relative" ref={containerRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="inline-flex items-center gap-1.5 rounded-md border border-[#BCBEC0] bg-[#ECECEC] px-2.5 py-1.5 text-[9px] font-bold whitespace-nowrap text-black transition-colors hover:border-[#922D2E]"
        onClick={() => setIsOpen((wasOpen) => !wasOpen)}
        type="button"
      >
        {describeSelection(selectedIndustries)}
        <ChevronIcon aria-hidden="true" className="text-[8px]" />
      </button>

      {isOpen ? (
        <div
          aria-label="Filter by industry"
          className="absolute top-[calc(100%+4px)] left-0 z-10 w-[152px] overflow-hidden sm:right-0 sm:left-auto rounded-md border border-[#BCBEC0] bg-[#ECECEC] shadow-[0_10px_24px_rgb(0_0_0_/_12%)]"
          role="menu"
        >
          {mentorIndustries.map((industry, index) => {
            const isSelected = selectedIndustries.includes(industry);

            return (
              <button
                aria-checked={isSelected}
                className={`flex w-full items-center justify-between gap-2 px-2.5 py-2 text-left text-[9px] transition-colors hover:bg-white ${index > 0 ? "border-t border-[#BCBEC0]/70" : ""} ${isSelected ? "font-bold text-[#922D2E]" : "font-semibold text-black/75"}`}
                key={industry}
                onClick={() => onToggleIndustry(industry)}
                role="menuitemcheckbox"
                type="button"
              >
                {mentorIndustryLabels[industry]}
                {isSelected ? (
                  <FaCheck aria-hidden="true" className="shrink-0 text-[9px]" />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function describeSelection(selectedIndustries: MentorIndustry[]): string {
  if (selectedIndustries.length === 0) {
    return "Filter by industry";
  }

  if (selectedIndustries.length === 1) {
    return mentorIndustryLabels[selectedIndustries[0]];
  }

  return `${selectedIndustries.length} industries`;
}
