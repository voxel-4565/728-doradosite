import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function ResidencesGallery2() {
  return (
    <section className="bg-white">
      <div className="max-w-[1920px] mx-auto">
        <ScrollReveal animation="fadeIn" duration={1500}>
          <div className="relative w-full aspect-[1920/1080]">
            <Image
              src="/images/res-livingroom.jpg"
              alt="Dorado Grove residence living room"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </ScrollReveal>
        <div className="px-6 lg:px-[240px] pt-4 pb-8">
          <p className="text-[#6a5c51] text-xs lg:text-[13px] font-normal font-[var(--font-inter)]">
            Lorem Ipsum
          </p>
        </div>
      </div>
    </section>
  );
}
