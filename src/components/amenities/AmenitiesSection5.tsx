import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function AmenitiesSection5() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px]">
        {/* Top: heading left + text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mb-10">
          <div>
            <ScrollReveal animation="fadeInUp">
              <h2 className="text-[#6a5c51] text-2xl lg:text-[34.2px] font-medium font-heading tracking-[-0.2px] leading-[1.4]">
                Lorem Ipsum
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:pl-8">
            <ScrollReveal animation="fadeInUp">
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

        {/* Text left + image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <ScrollReveal animation="fadeInUp">
            <div className="flex flex-col justify-center">
              <h3 className="text-[#4e4034] text-2xl lg:text-[39.5px] font-light font-heading tracking-[-0.2px] leading-[1.2] mb-8">
                Wellness Lives<br />and Thrives Here.
              </h3>
              <p className="text-[#6a5c51] text-sm lg:text-[16px] font-light font-[var(--font-inter)] leading-[1.5]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
              </p>
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal animation="fadeIn" duration={1500}>
              <div className="relative aspect-[710/960] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
                <Image
                  src="/images/amen-placeholder.jpg"
                  alt="Amenities feature"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 710px"
                />
              </div>
            </ScrollReveal>
            <p className="text-[#4e4034] text-xs lg:text-[13px] font-normal font-[var(--font-inter)] pt-4">
              Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
