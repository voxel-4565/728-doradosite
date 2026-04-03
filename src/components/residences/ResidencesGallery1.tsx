import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function ResidencesGallery1() {
  return (
    <section className="bg-[#f9f6f2] py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[240px]">
        <ScrollReveal animation="fadeIn" duration={1500}>
          <div className="relative w-full aspect-[1443/812]">
            <Image
              src="/images/res-brochure.jpg"
              alt="Dorado Grove residence interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1443px"
            />
          </div>
        </ScrollReveal>
        <p className="text-[#6a5c51] text-xs lg:text-[13px] font-normal font-[var(--font-inter)] pt-4">
          Lorem ipsum
        </p>
      </div>
    </section>
  );
}
