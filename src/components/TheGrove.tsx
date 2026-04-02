import Image from "next/image";

export default function TheGrove() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[0]">
        {/* Script heading */}
        <div className="text-center mb-10 lg:mb-[114px]">
          <h2 className="font-script text-5xl sm:text-7xl lg:text-[96px] text-[#4e4034] leading-[0.65]">
            The Grove
          </h2>
        </div>

        {/* Full-width image */}
        <div className="relative w-full aspect-[1440/810] mb-10 lg:mb-[114px]">
          <Image
            src="/images/grove.jpg"
            alt="The Grove plaza with playground area, tropical landscaping and modern architecture at Dorado Grove"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1440px"
          />
        </div>

        {/* Description text */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-0 text-center">
          <p className="text-[#6a5c51] text-base sm:text-lg lg:text-[24px] leading-[1.5] font-medium italic font-[var(--font-dm-sans)]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
            per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </div>
    </section>
  );
}
