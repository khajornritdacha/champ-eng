import { Reveal } from "../reveal";
import { SectionTitle } from "../section-title";
import { frequentlyAskedQuestions } from "./home-content";

export function FaqSection(): React.JSX.Element {
  return (
    <Reveal>
      <section className="px-7 pt-1 pb-16">
        <SectionTitle title="FAQ" />
        {frequentlyAskedQuestions.map((item) => (
          <details
            className="border-b border-[#BCBEC0]/60 py-[17px]"
            key={item.question}
          >
            <summary className="cursor-pointer pr-[22px] text-[14px] leading-[1.45] font-bold marker:text-[#922D2E] open:text-[#922D2E]">
              {item.question}
            </summary>
            <p className="mt-3 text-[14px] leading-[1.75] text-black/75">
              {item.answer}
            </p>
          </details>
        ))}
      </section>
    </Reveal>
  );
}
