import type { KeyboardEvent } from "react";

import type { ApplicationStage } from "./application-checklist-data";

type ChecklistStageTabsProps = {
  activeIndex: number;
  onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
  onSelectStage: (index: number) => void;
  stages: ApplicationStage[];
};

export function ChecklistStageTabs({
  activeIndex,
  onKeyDown,
  onSelectStage,
  stages,
}: ChecklistStageTabsProps): React.JSX.Element {
  return (
    <div
      aria-label="Application checklist stages"
      className="mt-7 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]"
      onKeyDown={onKeyDown}
      role="tablist"
    >
      {stages.map((stage, index) => (
        <button
          aria-controls={`${stage.id}-panel`}
          aria-selected={index === activeIndex}
          className={`shrink-0 rounded-full border px-3 py-2 text-[10px] font-bold transition-colors ${index === activeIndex ? "border-black bg-black text-white" : "border-[#BCBEC0] bg-white text-black/70 hover:border-[#922D2E]"}`}
          id={`${stage.id}-tab`}
          key={stage.id}
          onClick={() => onSelectStage(index)}
          role="tab"
          tabIndex={index === activeIndex ? 0 : -1}
          type="button"
        >
          {stage.label}
        </button>
      ))}
    </div>
  );
}
