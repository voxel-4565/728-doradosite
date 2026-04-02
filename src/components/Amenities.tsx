import Image from "next/image";

export default function Amenities() {
  return (
    <section id="amenities" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px] py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          {/* Left column */}
          <div>
            <h3 className="font-heading font-medium text-[#6a5c51] text-2xl lg:text-[36.3px] tracking-[-0.2px] leading-[1.3] mb-6">
              Lorem Ipsum
            </h3>
            <div className="mb-2">
              <span className="font-script text-[#515151] text-3xl lg:text-[40px] capitalize leading-none">
                The Amenities
              </span>
            </div>
            <div className="w-[333px] h-[1px] bg-[#a09080]/40 mt-4" />
          </div>

          {/* Right column */}
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
        </div>
      </div>

      {/* Full-width rooftop image */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px]">
        <div className="relative w-full aspect-[1439/810]">
          <Image
            src="/images/rooftop.jpg"
            alt="Rooftop food and beverage terrace with ocean views and tropical landscaping at Dorado Grove"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1440px"
          />
        </div>
      </div>
    </section>
  );
}
