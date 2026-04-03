import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function ResidencesFloorplans() {
  return (
    <section className="bg-white">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Image left - flush left */}
          <div className="relative w-full lg:w-[720px] shrink-0 aspect-[720/960]">
            <ScrollReveal animation="fadeIn" duration={1500}>
              <div className="relative w-full aspect-[720/960]">
                <Image
                  src="/images/res-dining.jpg"
                  alt="Residence dining area with modern design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>
            </ScrollReveal>
          </div>
          {/* Text right */}
          <div className="flex-1 px-6 py-12 lg:px-16 lg:py-0 flex flex-col justify-center">
            <ScrollReveal animation="fadeInUp" delay={200}>
              <p className="text-[#4e4034] text-xs lg:text-[13px] font-normal font-[var(--font-inter)] tracking-wide mb-10">
                Lorem Ipsum
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fadeInUp" delay={200}>
              <div className="mb-4">
                <span className="font-script text-[#515151] text-3xl lg:text-[40px] capitalize leading-none">
                  Floorplans
                </span>
                <span className="inline-block ml-4 w-[100px] h-[1px] bg-[#a09080]/60 align-middle" />
              </div>
              <div className="w-[271px] h-[1px] bg-[#a09080]/40 mt-2" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
