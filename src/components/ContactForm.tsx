import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function ContactForm() {
  return (
    <section id="contact" className="relative bg-[#2a3a2a] py-20 lg:py-32">
      <Image
        src="/images/contact-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#1a2a1a]/70" />
      <div className="relative z-10 max-w-[926px] mx-auto px-6">
        <ScrollReveal animation="fadeInUp">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 mb-4">
          <input
            type="text"
            placeholder="*First Name"
            className="bg-transparent border-b border-white text-white text-sm py-3 px-2 placeholder:text-white/80 focus:outline-none"
          />
          <input
            type="text"
            placeholder="*Last Name"
            className="bg-transparent border-b border-white text-white text-sm py-3 px-2 placeholder:text-white/80 focus:outline-none"
          />
          <input
            type="email"
            placeholder="*Email"
            className="bg-transparent border-b border-white text-white text-sm py-3 px-2 placeholder:text-white/80 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 mb-4">
          <input
            type="tel"
            placeholder="*Phone"
            className="bg-transparent border-b border-white text-white text-sm py-3 px-2 placeholder:text-white/80 focus:outline-none"
          />
          <select className="bg-transparent border-b border-white text-white text-sm py-3 px-2 focus:outline-none appearance-none">
            <option value="">*Country</option>
          </select>
          <input
            type="text"
            placeholder="*Zip Code"
            className="bg-transparent border-b border-white text-white text-sm py-3 px-2 placeholder:text-white/80 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-4">
          <select className="bg-transparent border-b border-white text-white text-sm py-3 px-2 focus:outline-none appearance-none">
            <option value="">*Desired Residence Type</option>
          </select>
          <select className="bg-transparent border-b border-white text-white text-sm py-3 px-2 focus:outline-none appearance-none">
            <option value="">*Contact Preference</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
          <select className="bg-transparent border-b border-white text-white text-sm py-3 px-2 focus:outline-none appearance-none">
            <option value="">*How did you hear about us?</option>
          </select>
          <select className="bg-transparent border-b border-white text-white text-sm py-3 px-2 focus:outline-none appearance-none">
            <option value="">*Are you a broker?</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#f9f6f2] border border-black text-black text-xl lg:text-[32px] font-normal rounded-full px-16 py-5 hover:bg-white transition-colors">
            Register
          </button>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
