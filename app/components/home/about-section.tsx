import { Reveal } from "../reveal";
import { SectionTitle } from "../section-title";

export function AboutSection(): React.JSX.Element {
  return (
    <Reveal>
      <section className="px-7 py-14">
        <SectionTitle title="What is ChAMP Engineering?" />
        <p className="text-[14px] leading-[1.78] text-black/75">
          โครงการแนะแนวสำหรับนิสิตวิศวะฯ จุฬาฯ ที่เชื่อมโยงผู้คน ประสบการณ์
          และโอกาส ผ่านการพูดคุย แลกเปลี่ยนมุมมอง และเรียนรู้ร่วมกันระหว่างพี่ ๆ
          Mentor จากหลากหลายสายอาชีพ และน้อง ๆ Mentee ที่เป็นนิสิตปัจจุบัน
          ไม่ว่าจะเป็นเรื่องการเรียน การทำงาน ไปจนถึงการใช้ชีวิต
        </p>
      </section>
    </Reveal>
  );
}
