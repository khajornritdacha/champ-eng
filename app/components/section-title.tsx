type SectionTitleProps = {
  eyebrow?: string;
  tone?: "dark" | "light";
  title: string;
};

export function SectionTitle({
  eyebrow,
  tone = "dark",
  title,
}: SectionTitleProps): React.JSX.Element {
  const titleColor = tone === "light" ? "text-white" : "text-black";

  return (
    <div className="mb-5">
      {eyebrow ? (
        <p className="mb-3 text-[11px] font-extrabold tracking-[0.11em] text-[#922D2E] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-[29px] leading-[1.04] font-bold tracking-[0.035em] ${titleColor}`}
      >
        {title}
      </h2>
    </div>
  );
}
