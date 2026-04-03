import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Retail() {
  return (
    <section id="retail" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-start">
          {/* Left - image placeholder */}
          <ScrollReveal animation="fadeIn" duration={1500}>
            <div className="relative aspect-[696/928] bg-[#f0ebe5] flex items-center justify-center">
              <svg className="w-16 h-16 text-[#c9b99a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1" />
                <path d="M3 16l5-5 4 4 4-6 5 7" strokeWidth="1" />
                <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1" />
              </svg>
            </div>
          </ScrollReveal>

          {/* Right - text */}
          <ScrollReveal animation="fadeInUp" delay={200}>
            <div className="lg:pl-16 flex flex-col justify-center">
              <h2 className="font-script text-4xl sm:text-5xl lg:text-[60px] text-[#4e4034] mb-6 leading-[0.8]">
                Lifestyles
              </h2>
              <p className="text-[#6a5c51] text-sm lg:text-[16px] leading-[1.5] font-light font-[var(--font-inter)] mb-4 max-w-[503px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
                Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
                torquent per conubia nostra inceptos himenaeos.
              </p>
              <p className="text-[#6a5c51] text-sm lg:text-[16px] leading-[1.5] font-light font-[var(--font-inter)] mb-6 max-w-[501px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas.
              </p>
              <div className="mb-2 inline-flex items-center gap-2">
                <span className="font-script text-[#515151] text-3xl lg:text-[40px] capitalize leading-none">
                  The Retail
                </span>
                <svg width="100" height="6" viewBox="0 0 100 6" className="text-[#a09080]">
                  <line x1="0" y1="3" x2="90" y2="3" stroke="currentColor" strokeWidth="1" />
                  <path d="M88,3 L95,0.5 L95,5.5 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="w-[333px] h-[1px] bg-[#a09080]/40 mt-2" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
