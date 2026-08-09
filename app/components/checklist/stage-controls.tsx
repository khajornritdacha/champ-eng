type StageControlsProps = {
  onNext: () => void;
  onPrevious: () => void;
};

export function StageControls({
  onNext,
  onPrevious,
}: StageControlsProps): React.JSX.Element {
  return (
    <div className="mt-[30px] flex justify-between gap-2">
      <button
        className="min-h-10 rounded-xl border border-[#BCBEC0] px-[15px] text-[11px] font-bold text-black/75 transition-colors hover:border-[#922D2E]"
        onClick={onPrevious}
        type="button"
      >
        Previous
      </button>
      <button
        className="min-h-10 rounded-xl bg-black px-[15px] text-[11px] font-bold text-white transition-colors hover:bg-[#922D2E]"
        onClick={onNext}
        type="button"
      >
        Next stage
      </button>
    </div>
  );
}
