import Image from "next/image";

import type { Mentor } from "./mentors-data";

type MentorCardProps = {
  mentor: Mentor;
};

export function MentorCard({ mentor }: MentorCardProps): React.JSX.Element {
  const hasCompanyLogo = Boolean(mentor.companyLogoUrl);

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-lg bg-[linear-gradient(180deg,#D15C5C_0%,#D15C5C_44%,#C53737_72%,#7D2424_100%)] p-1 shadow-[0_6px_16px_rgb(0_0_0_/_14%)] transition-transform hover:-translate-y-0.5">
      <div className="relative aspect-square w-full overflow-hidden rounded bg-[#D9D9D9]">
        <Image
          alt={`${mentor.nickname} — ${mentor.fullName}`}
          className="object-cover"
          fill
          sizes="(max-width: 640px) 45vw, 200px"
          src={mentor.mentorPictureUrl}
          /* Mentor photos come from arbitrary external hosts, so they skip the
             optimizer instead of needing every host in images.remotePatterns. */
          unoptimized
        />
      </div>

      <div className="flex flex-1 flex-col items-center gap-1 px-1 pt-2 pb-1 text-center text-white">
        <p className="text-[15px] leading-[1.15] font-bold">
          {mentor.nickname}
        </p>
        <p className="text-[11px] leading-[1.2]">{mentor.fullName}</p>

        <p className="flex flex-wrap items-center justify-center gap-1.5 text-[12px] leading-none font-bold">
          <span className="rounded-lg bg-[#F6DC81] px-2 py-0.5 text-[#7D2424]">
            {mentor.department}
          </span>
          <span>Intania {mentor.classYear}</span>
        </p>

        <p className="mt-0.5 w-full rounded-lg border border-[#F6DC81] px-1.5 py-1 text-[10px] leading-[1.2] font-bold text-[#F6DC81]">
          {mentor.position}
        </p>

        <div
          className={`mt-auto flex w-full items-center gap-1.5 pt-1.5 ${hasCompanyLogo ? "" : "justify-center"}`}
        >
          {mentor.companyLogoUrl ? (
            <span className="relative h-7 w-[42%] shrink-0 overflow-hidden rounded bg-white">
              <Image
                alt={`${mentor.companyName} logo`}
                className="object-contain p-1"
                fill
                sizes="80px"
                src={mentor.companyLogoUrl}
                unoptimized
              />
            </span>
          ) : null}
          <p
            className={`text-[9px] leading-[1.25] ${hasCompanyLogo ? "text-left" : "text-center"}`}
          >
            {mentor.companyName}
          </p>
        </div>
      </div>
    </article>
  );
}
