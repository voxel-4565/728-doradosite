import Image from "next/image";

export default function Residences() {
  return (
    <section id="residences" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px]">
        {/* Heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mb-10">
          <div>
            <p className="text-[#6a5c51] text-2xl lg:text-[34.2px] font-heading font-medium tracking-[-0.2px] mb-2">
              Lorem Ipsum
            </p>
          </div>
          <div className="lg:pl-8">
            <p className="text-[#6a5c51] text-sm lg:text-[16px] leading-[1.5] font-light font-[var(--font-inter)] max-w-[632px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
              pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
              tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
            </p>
            <div className="mt-4 mb-2">
              <span className="font-script text-[#515151] text-3xl lg:text-[40px] capitalize leading-none">
                the residences
              </span>
            </div>
            <div className="w-[333px] h-[1px] bg-[#a09080]/40 mt-2" />
          </div>
        </div>
      </div>

      {/* Dusk exterior image */}
      <div className="relative w-full aspect-[1920/1080]">
        <Image
          src="/images/dusk.jpg"
          alt="Dorado Grove residential buildings at dusk with warm lighting and tropical landscaping"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
