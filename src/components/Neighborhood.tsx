import ScrollReveal from "./ScrollReveal";

export default function Neighborhood() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mb-10">
          <ScrollReveal animation="fadeInUp">
            <div>
              <h3 className="text-[#6a5c51] text-2xl lg:text-[36.3px] font-heading font-medium tracking-[-0.2px] leading-[1.3] mb-4">
                Life in<br />Coconut Grove
              </h3>
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
                sit amet consectetur adipiscing elit.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fadeInUp">
          <div className="mb-2 inline-flex items-center gap-2">
            <span className="font-script text-[#515151] text-3xl lg:text-[40px] capitalize leading-none">
              The neighborhood
            </span>
            <svg width="100" height="6" viewBox="0 0 100 6" className="text-[#a09080]">
              <line x1="0" y1="3" x2="90" y2="3" stroke="currentColor" strokeWidth="1" />
              <path d="M88,3 L95,0.5 L95,5.5 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="w-[377px] h-[1px] bg-[#a09080]/40 mt-2" />
        </ScrollReveal>
      </div>
    </section>
  );
}
