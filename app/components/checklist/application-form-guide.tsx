import { applicationBenefits, starTips } from "./application-checklist-data";

export function ApplicationFormGuide(): React.JSX.Element {
  return (
    <div className="mt-[42px] grid gap-[34px]">
      <section className="border-t border-[#BCBEC0] pt-8">
        <h2 className="text-[26px] leading-[1.12] font-bold tracking-[0.035em]">
          การเขียนใบสมัครให้อะไรเราบ้าง
        </h2>
        <div className="mt-[18px] grid gap-3">
          {applicationBenefits.map((benefit) => (
            <article
              className="rounded-[14px] border border-[#BCBEC0] bg-white p-4 shadow-[0_8px_22px_rgb(0_0_0_/_5%)]"
              key={benefit.title}
            >
              <h3 className="text-[13px] leading-[1.3] font-bold text-[#922D2E]">
                {benefit.title}
              </h3>
              <ul className="mt-3 grid list-disc gap-2 pl-[19px] text-xs leading-[1.65] text-black/70">
                {benefit.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="rounded-2xl bg-black p-[22px] text-white">
          <h2 className="text-[29px] leading-[1.12] font-bold tracking-[0.035em]">
            Quick Tips
          </h2>
          <p className="mt-1 text-xs font-bold text-[#BCBEC0]">
            การตอบคำถามด้วย STAR technique
          </p>
        </div>
        <div className="mt-[18px] grid gap-3">
          {starTips.map((tip, index) => (
            <article
              className="relative rounded-[14px] bg-[#BCBEC0]/15 py-4 pr-4 pl-12"
              key={tip.title}
            >
              <span className="absolute top-4 left-4 grid size-[23px] place-items-center rounded-full bg-[#922D2E] text-[10px] font-extrabold text-white">
                {index + 1}
              </span>
              <h3 className="text-[13px] leading-[1.3] font-bold text-[#922D2E]">
                {tip.title}
              </h3>
              <p className="mt-1 text-xs leading-[1.65] text-black/70">{tip.summary}</p>
              <p className="mt-1 text-[11px] leading-[1.65] text-black/55">{tip.english}</p>
              <p className="mt-1 text-xs leading-[1.65] text-black/70">{tip.detail}</p>
              <p className="mt-1 text-[11px] leading-[1.65] text-black/55">
                {tip.detailEnglish}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
