import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Dorado Grove luxury coastal development with sculptural entrance and modern architecture"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 lg:pb-24 px-4 gap-2">
        <ScrollReveal animation="fadeInUp" delay={500} duration={1500}>
          <h1 className="text-white text-center text-2xl sm:text-3xl lg:text-[40px] tracking-wide uppercase font-medium italic font-[var(--font-inter)] leading-[1.6]">
            Discover the Peak of Coastal Sophistication
          </h1>
        </ScrollReveal>
        <ScrollReveal animation="fadeInUp" delay={1200} duration={1500}>
          <p className="text-white text-center text-[13px] sm:text-[15.5px] tracking-[1.2px] uppercase font-normal font-[var(--font-inter)]">
            Welcome To DORADO
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
