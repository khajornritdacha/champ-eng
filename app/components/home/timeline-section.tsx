import { Reveal } from "../reveal";

export function TimelineSection(): React.JSX.Element {
  return (
    <Reveal>
      <section
        aria-label="ChAMP timeline"
        className="mx-7 grid min-h-[214px] place-content-center justify-items-center rounded-[20px] bg-black [background-image:linear-gradient(135deg,rgb(255_255_255_/_12%),transparent)] px-7 py-8 text-center text-white shadow-[0_18px_36px_rgb(0_0_0_/_14%)]"
      >
        <span className="text-[10px] font-extrabold tracking-[0.13em] text-[#BCBEC0] uppercase">
          ChAMP Engineering
        </span>
        <strong className="mt-2 text-[30px] font-bold tracking-[-0.05em]">
          Timeline
        </strong>
        <div aria-hidden="true" className="mt-[18px] flex items-center gap-2">
          <i className="h-1 w-[46px] rounded-full bg-[#922D2E] animate-[timeline-pulse_2.4s_ease-in-out_infinite]" />
          <i className="h-1 w-[46px] rounded-full bg-[#BCBEC0] animate-[timeline-pulse_2.4s_ease-in-out_300ms_infinite]" />
          <i className="h-1 w-[46px] rounded-full bg-white animate-[timeline-pulse_2.4s_ease-in-out_600ms_infinite]" />
        </div>
        <p className="mt-[14px] text-[11px] text-[#BCBEC0]">
          Apply · Learn · Pair · Celebrate
        </p>
      </section>
    </Reveal>
  );
}
