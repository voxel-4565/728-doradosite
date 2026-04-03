import Header from "@/components/Header";
import AmenitiesHero from "@/components/amenities/AmenitiesHero";
import AmenitiesSection1 from "@/components/amenities/AmenitiesSection1";
import AmenitiesSection2 from "@/components/amenities/AmenitiesSection2";
import AmenitiesSection3 from "@/components/amenities/AmenitiesSection3";
import AmenitiesSection4 from "@/components/amenities/AmenitiesSection4";
import AmenitiesPhoto from "@/components/amenities/AmenitiesPhoto";
import AmenitiesSection5 from "@/components/amenities/AmenitiesSection5";
import ResidencesContact from "@/components/residences/ResidencesContact";
import Footer from "@/components/Footer";

export default function AmenitiesPage() {
  return (
    <>
      <Header />
      <main>
        <AmenitiesHero />
        <AmenitiesSection1 />
        <AmenitiesSection2 />
        <AmenitiesSection3 />
        <AmenitiesSection4 />
        <AmenitiesPhoto />
        <AmenitiesSection5 />
        <ResidencesContact />
      </main>
      <Footer />
    </>
  );
}
