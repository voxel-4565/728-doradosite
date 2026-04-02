import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px]">
        <div className="relative aspect-[1443/812] bg-[#ebe5dd] flex items-center justify-center cursor-pointer group overflow-hidden">
          {/* Play button */}
          <button
            aria-label="Play video"
            className="relative z-10"
          >
            <Image
              src="/images/play-btn.svg"
              alt="Play video"
              width={88}
              height={88}
              className="w-16 h-16 lg:w-[88px] lg:h-[88px] opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
