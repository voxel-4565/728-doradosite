import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Wellness() {
  return (
    <section id="wellness" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px]">
        {/* Heading section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mb-10">
          <ScrollReveal animation="fadeInUp">
            <div>
              <p className="text-[#6a5c51] text-2xl lg:text-[36.3px] font-heading font-medium tracking-[-0.2px] mb-2">
                Lorem Ipsum
              </p>
              <div className="mb-2">
                <span className="font-script text-[#515151] text-3xl lg:text-[40px] capitalize leading-none">
                  The wellness
                </span>
              </div>
              <div className="w-[333px] h-[1px] bg-[#a09080]/40 mt-4" />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="moveUp" delay={200}>
            <div className="lg:pl-8">
              <p className="text-[#6a5c51] text-sm lg:text-[13.9px] leading-[1.7] font-light italic font-[var(--font-inter)]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
                Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
                torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor
                sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
                vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                convallis.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Image placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal animation="fadeInUp">
            <div className="relative aspect-[696/928] bg-[#f0ebe5]" />
          </ScrollReveal>
          <ScrollReveal animation="fadeInUp" delay={200}>
            <div className="relative aspect-[696/928] bg-[#f0ebe5] flex items-center justify-center">
              <svg className="w-16 h-16 text-[#c9b99a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1" />
                <path d="M3 16l5-5 4 4 4-6 5 7" strokeWidth="1" />
                <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1" />
              </svg>
            </div>
          </ScrollReveal>
        </div>

        {/* Labels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <p className="text-[#6a5c51] text-xs tracking-wide">Lorem Ipsum</p>
          <p className="text-[#6a5c51] text-xs tracking-wide">Lorem Ipsum</p>
        </div>
      </div>
    </section>
  );
}
