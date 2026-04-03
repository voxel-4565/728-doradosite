import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function AmenitiesHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/amen-hero.jpg"
        alt="Dorado Grove amenities pool and cabana area"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 gap-3">
        <ScrollReveal animation="fadeInUp" delay={500}>
          <h1 className="text-white text-center text-4xl sm:text-5xl lg:text-[61.6px] font-light italic font-[var(--font-inter)] leading-[1.2]">
            The Dorado Grove
          </h1>
        </ScrollReveal>
        <ScrollReveal animation="fadeInUp" delay={1200}>
          <p className="text-white text-center text-[14px] sm:text-[16px] tracking-[1.2px] uppercase font-normal font-[var(--font-inter)]">
            The Amenities
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
