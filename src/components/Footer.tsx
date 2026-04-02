import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px]">
        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-8">
          <div className="text-[#6f6f6f] text-[15px] tracking-[1.2px] leading-relaxed">
            <p>Brian Tenenbaum 1738 Calle Amarillo</p>
            <p>Ste 101 San Juan PR. 00926</p>
          </div>
          <div className="text-[#6f6f6f] text-[15px] tracking-[1.2px]">
            <p>TEL: +1 000 000 0000</p>
            <p>EMAIL: bt@doradogrove.com</p>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center my-8">
          <Image
            src="/images/footer-logo.png"
            alt="Dorado Grove"
            width={224}
            height={37}
            className="h-auto w-[160px] lg:w-[224px] opacity-70"
          />
        </div>
      </div>
    </footer>
  );
}
