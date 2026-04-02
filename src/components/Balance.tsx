import Image from "next/image";

export default function Balance() {
  return (
    <section className="bg-[#f9f6f2] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
          {/* Left column - text */}
          <div className="flex flex-col justify-end lg:pr-12 order-2 lg:order-1">
            <div className="border-t border-[#6a5c51]/30 w-full lg:w-[719px] mb-0 hidden lg:block" />
            <div className="pt-8 lg:pt-12">
              <h2 className="font-script text-4xl sm:text-5xl lg:text-[60px] text-[#6a5c51] mb-6 leading-[0.8]">
                Balance
              </h2>
              <p className="text-[#6a5c51] text-sm lg:text-[16px] leading-[1.5] font-light font-[var(--font-inter)] mb-4 max-w-[503px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas. Iaculis massa nisl malesuada lacinia integer nunc
                posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
                litora torquent per conubia nostra inceptos himenaeos.
              </p>
              <p className="text-[#6a5c51] text-sm lg:text-[16px] leading-[1.5] font-light font-[var(--font-inter)] max-w-[501px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas.
              </p>
            </div>
          </div>

          {/* Right column - image */}
          <div className="relative aspect-[719/863] order-1 lg:order-2">
            <Image
              src="/images/balance-img.jpg"
              alt="Lush tropical greenery and palm fronds at Dorado Grove"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 719px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
