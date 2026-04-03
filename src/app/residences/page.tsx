import Header from "@/components/Header";
import ResidencesHero from "@/components/residences/ResidencesHero";
import ResidencesIntro from "@/components/residences/ResidencesIntro";
import ResidencesBodyText from "@/components/residences/ResidencesBodyText";
import BuildingFeatures from "@/components/residences/BuildingFeatures";
import ResidencesGallery1 from "@/components/residences/ResidencesGallery1";
import ResidencesFloorplans from "@/components/residences/ResidencesFloorplans";
import ResidencesGallery2 from "@/components/residences/ResidencesGallery2";
import ResidencesLorem from "@/components/residences/ResidencesLorem";
import ResidencesGallery3 from "@/components/residences/ResidencesGallery3";
import ResidencesContact from "@/components/residences/ResidencesContact";
import Footer from "@/components/Footer";

export default function ResidencesPage() {
  return (
    <>
      <Header />
      <main>
        <ResidencesHero />
        <ResidencesIntro />
        <ResidencesBodyText />
        <BuildingFeatures />
        <ResidencesGallery1 />
        <ResidencesFloorplans />
        <ResidencesGallery2 />
        <ResidencesLorem />
        <ResidencesGallery3 />
        <ResidencesContact />
      </main>
      <Footer />
    </>
  );
}
