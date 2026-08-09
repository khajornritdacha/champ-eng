import { Reveal } from "../reveal";
import { SectionTitle } from "../section-title";
import { menteeVisionValues } from "./home-content";

export function MenteeVisionSection(): React.JSX.Element {
  return (
    <Reveal>
      <section className="mx-5 mb-[58px] rounded-[20px] bg-[#922D2E] [background-image:linear-gradient(160deg,rgb(0_0_0_/_12%),rgb(0_0_0_/_72%))] px-7 py-[38px] text-white">
        <SectionTitle title="Mentee Vision" tone="light" />
        <p className="m-0 border-l-[3px] border-white pl-3 text-[15px] leading-[1.7] text-white">
          “Empowering engineering students to grow with purpose, connect across
          generations, and contribute meaningfully to society through mentorship,
          self, and community”
        </p>
        <div className="mt-[26px] grid grid-cols-3 gap-2.5">
          {menteeVisionValues.map(({ icon: Icon, label }) => (
            <article
              className="grid justify-items-center gap-2 rounded-[14px] border border-white bg-white px-1.5 py-3.5 text-[#922D2E] transition-transform hover:-translate-y-1"
              key={label}
            >
              <Icon aria-hidden="true" className="size-5" />
              <span className="text-[10px] font-extrabold text-black">{label}</span>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
