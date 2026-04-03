import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function BuildingFeatures() {
  return (
    <section className="bg-white">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text left */}
          <div className="flex-1 px-6 py-12 lg:px-0 lg:py-0 lg:pl-[240px] lg:pr-16 flex flex-col justify-center">
            <ScrollReveal animation="fadeInUp">
              <h3 className="text-[#6a5c51] text-xl lg:text-[23.3px] font-light font-heading leading-[1.2] mb-8">
                Lorem ipsum dolor
              </h3>
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
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
                malesuada lacinia integer nunc posuere.
              </p>
            </ScrollReveal>
          </div>
          {/* Image right - flush right */}
          <div className="relative w-full lg:w-[720px] shrink-0 aspect-[720/960]">
            <ScrollReveal animation="fadeIn" duration={1500}>
              <div className="relative w-full aspect-[720/960]">
                <Image
                  src="/images/res-bedroom.jpg"
                  alt="Residence living room with elegant interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
        <p className="text-[#6a5c51] text-xs lg:text-[13px] font-normal font-[var(--font-inter)] px-6 lg:px-0 lg:pl-[960px] pt-4 pb-8">
          Residence Living Room
        </p>
      </div>
    </section>
  );
}
