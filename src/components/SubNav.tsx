import Link from "next/link";

const navItems = [
  { label: "Residences", href: "#residences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Wellness", href: "#wellness" },
  { label: "Retail", href: "#retail" },
];

export default function SubNav() {
  return (
    <nav className="bg-[#f9f6f2]">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[260px] py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="border border-[#a09080] rounded-full py-2.5 text-[#a09080] text-sm lg:text-[16px] uppercase font-medium tracking-wide hover:bg-[#a09080] hover:text-white transition-colors text-center"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
