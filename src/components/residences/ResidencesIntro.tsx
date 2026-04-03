import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function ResidencesIntro() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Tall image left - flush left full bleed */}
        <div className="relative w-full lg:w-[720px] shrink-0 aspect-[720/960]">
          <ScrollReveal animation="fadeIn" duration={1500}>
            <div className="relative w-full aspect-[720/960]">
              <Image
                src="/images/res-bedroom-tall.jpg"
                alt="Luxury bedroom with modern furnishings"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 720px"
              />
            </div>
          </ScrollReveal>
        </div>
        {/* Text right - within content area */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 lg:py-0">
          <ScrollReveal animation="fadeInUp" delay={200}>
            <p className="text-[#4e4034] text-xs lg:text-[13px] font-normal font-[var(--font-inter)] tracking-wide mb-6">
              Residence Bedroom
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeInUp" delay={200}>
            <h2 className="text-[#4e4034] text-3xl lg:text-[39.5px] font-light font-heading tracking-[-0.2px] leading-[1.2] mb-8">
              Wellness Lives<br />and Thrives Here.
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeInUp" delay={200}>
            <p className="text-[#6a5c51] text-sm lg:text-[16px] font-light font-[var(--font-inter)] leading-[1.5] mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
              pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
              tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeInUp" delay={200}>
            <p className="text-[#6a5c51] text-sm lg:text-[16px] font-light font-[var(--font-inter)] leading-[1.5]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
              pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
              tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
