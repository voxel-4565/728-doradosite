import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function AmenitiesSection1() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px]">
        {/* Top: heading left + text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mb-8">
          <div>
            <ScrollReveal animation="fadeInUp">
              <h2 className="text-[#6a5c51] text-2xl lg:text-[34.2px] font-medium font-heading tracking-[-0.2px] leading-[1.4]">
                Lorem Ipsum
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:pl-8">
            <ScrollReveal animation="moveUp" delay={200}>
              <p className="text-[#6a5c51] text-sm lg:text-[16px] font-light font-[var(--font-inter)] leading-[1.5]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
                Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
                torquent per conubia nostra inceptos himenaeos.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Floorplans script link */}
        <ScrollReveal animation="fadeInUp">
          <div className="mb-2 lg:pl-[767px]">
            <span className="font-script text-[#515151] text-3xl lg:text-[40px] capitalize leading-none">
              the floorplans
            </span>
            <span className="inline-block ml-4 w-[100px] h-[1px] bg-[#a09080]/60 align-middle" />
          </div>
          <div className="lg:pl-[767px] mb-10">
            <div className="w-[335px] h-[1px] bg-[#a09080]/40" />
          </div>
        </ScrollReveal>

        {/* Full-width image */}
        <ScrollReveal animation="fadeIn" duration={1500}>
          <div className="relative w-full aspect-[1440/812] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
            <Image
              src="/images/amen-placeholder.jpg"
              alt="Amenities overview"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1440px"
            />
          </div>
          <p className="text-[#4e4034] text-xs lg:text-[13px] font-normal font-[var(--font-inter)] pt-4">
            Lorem Ipsum
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
