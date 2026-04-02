import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SubNav from "@/components/SubNav";
import TheGrove from "@/components/TheGrove";
import Balance from "@/components/Balance";
import VideoSection from "@/components/VideoSection";
import Amenities from "@/components/Amenities";
import Wellness from "@/components/Wellness";
import Retail from "@/components/Retail";
import Residences from "@/components/Residences";
import Neighborhood from "@/components/Neighborhood";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SubNav />
        <TheGrove />
        <Balance />
        <VideoSection />
        <Amenities />
        <Wellness />
        <Retail />
        <Residences />
        <Neighborhood />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
