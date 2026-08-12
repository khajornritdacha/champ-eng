import Link from "next/link";

export function HeroSection(): React.JSX.Element {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_100%_8%,rgb(146_45_46_/_12%),transparent_34%),linear-gradient(150deg,#fff_22%,rgb(188_190_192_/_12%))] px-7 pt-[72px] pb-16 animate-[enter_500ms_ease-out_both]"
      id="home"
    >
      <div className="absolute right-[-44px] bottom-[-54px] size-[178px] rounded-full border border-[#922D2E]/20" />
      <p className="relative mb-3 text-[11px] font-extrabold tracking-[0.11em] text-[#922D2E] uppercase">
        ChAMP Engineering
      </p>
      <h1 className="relative max-w-[390px] text-[clamp(40px,11vw,54px)] leading-[0.96] font-bold tracking-[0.035em]">
        Prepare for ChAMP Eng the right way
      </h1>
      <p className="relative mt-[22px] max-w-[360px] text-[15px] leading-[1.7] text-black/65">
        A simple checklist tool for mentee applicants. Work through each phase of ChAMP Engineering, reflect on your answers, and walk into the application knowing you are ready.
      </p>
      <div className="relative mt-7 flex gap-2.5">
        <Link
          className="inline-flex min-h-[42px] items-center justify-center rounded-xl bg-[#922D2E] px-[18px] text-xs font-bold text-white shadow-[0_10px_20px_rgb(146_45_46_/_20%)] transition-transform hover:-translate-y-0.5"
          href="https://apply.champeng.site/"
          target="_blank"
        >
          Start your application
        </Link>
        <Link
          className="inline-flex min-h-[42px] items-center justify-center rounded-xl border border-[#BCBEC0] bg-white px-[18px] text-xs font-bold text-black transition-transform hover:-translate-y-0.5"
          href="/checklist"
        >
          Checklist
        </Link>
      </div>
    </section>
  );
}
