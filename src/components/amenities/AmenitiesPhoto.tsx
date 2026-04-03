import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function AmenitiesPhoto() {
  return (
    <section>
      <ScrollReveal animation="fadeIn" duration={1500}>
        <div className="relative w-full aspect-[1920/1080]">
          <Image
            src="/images/amen-placeholder.jpg"
            alt="Dorado Grove amenities"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
