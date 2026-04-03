import ScrollReveal from "../ScrollReveal";

export default function ResidencesLorem() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          <div>
            <ScrollReveal animation="fadeInUp">
              <p className="text-[#6a5c51] text-xs lg:text-[13px] font-normal font-[var(--font-inter)] mb-6">
                Lorem Ipsum
              </p>
              <h3 className="text-[#6a5c51] text-2xl lg:text-[36.3px] font-medium font-[var(--font-inter)] tracking-[-0.2px] leading-[1.3]">
                Lorem Ipsum
              </h3>
            </ScrollReveal>
          </div>
          <div className="lg:pl-8">
            <ScrollReveal animation="moveUp" delay={200}>
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
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
