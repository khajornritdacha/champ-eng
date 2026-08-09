export function DressCodePanel(): React.JSX.Element {
  return (
    <section
      aria-label="Dress code"
      className="mt-[30px] grid min-h-[214px] grid-cols-2 gap-[18px] rounded-[20px] bg-[#BCBEC0] p-[22px]"
    >
      <div>
        <p className="mb-3 text-[11px] font-extrabold tracking-[0.11em] text-[#922D2E] uppercase">
          Dress Code
        </p>
        <h2 className="text-[25px] leading-[1.08] font-bold tracking-[-0.055em]">
          Business Casual
        </h2>
        <p className="mt-3 text-xs leading-[1.6] text-black/75">
          Be comfortable, be yourself, and bring your best energy.
        </p>
      </div>
      <div
        aria-hidden="true"
        className="relative min-h-[168px] overflow-hidden rounded-[14px] bg-white/45"
      >
        <span className="absolute bottom-[11px] left-[19px] h-[79px] w-[34px] rounded-t-[19px] rounded-b-md bg-[#922D2E] before:absolute before:top-[-23px] before:left-[7px] before:h-[25px] before:w-5 before:rounded-[48%] before:bg-[#BCBEC0] before:content-['']" />
        <span className="absolute right-[17px] bottom-[11px] h-[89px] w-[34px] rounded-t-[19px] rounded-b-md bg-black before:absolute before:top-[-23px] before:left-[7px] before:h-[25px] before:w-5 before:rounded-[48%] before:bg-[#BCBEC0] before:content-['']" />
        <span className="absolute top-[30px] left-3 size-2.5 rotate-45 bg-[#922D2E]" />
        <span className="absolute top-[18px] right-[13px] size-2.5 rotate-45 bg-[#922D2E]" />
      </div>
    </section>
  );
}
