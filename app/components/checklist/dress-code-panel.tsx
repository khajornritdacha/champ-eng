import Image from "next/image";

import businessCasualGuide from "@/public/business-casual.png";

export function DressCodePanel(): React.JSX.Element {
  return (
    <section
      aria-label="Dress code"
      className="mt-[30px] rounded-[20px] bg-[#BCBEC0] p-[22px]"
    >
      <p className="mb-3 text-[11px] font-extrabold tracking-[0.11em] text-[#922D2E] uppercase">
        Dress Code
      </p>
      <h2 className="text-[25px] leading-[1.08] font-bold tracking-[0.035em]">
        Business Casual
      </h2>
      <p className="mt-3 text-xs leading-[1.6] text-black/75">
        Be comfortable, be yourself, and bring your best energy.
      </p>
      <figure className="mt-[18px] overflow-hidden rounded-[14px] bg-white shadow-[0_8px_18px_rgb(0_0_0_/_8%)]">
        <Image
          alt="Illustrated guide comparing business casual and business professional outfits"
          className="h-auto w-full"
          sizes="(max-width: 480px) 100vw, 380px"
          src={businessCasualGuide}
        />
      </figure>
    </section>
  );
}
