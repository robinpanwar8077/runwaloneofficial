import Image from "next/image";
import Header from "@/components/header"
import HeroSection from "@/components/herosection"
import  OverviewSection  from "@/components/overview-section"
import  {HighlightsSection}  from "@/components/highlights-section"
import { ConfigurationSection } from "@/components/configuration-section"
import  AmenitiesSection  from "@/components/amenities-section"
import  GallerySection  from "@/components/gallery-section"
import ConnectivitySection from "@/components/map-section";
import  AboutSection  from "@/components/about-section"
import  Footer  from "@/components/footer"
import EnquireButton from "@/components/enquirebutton"
import EnquiryModal from '@/components/enquirymodal';
import ChatButton from "@/components/chatbutton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
     <HeroSection/>
     <OverviewSection/>
             <HighlightsSection />
                     <ConfigurationSection />
                          <AmenitiesSection />
        <GallerySection />
        <ConnectivitySection/>
        <AboutSection/>
        <EnquireButton/>
        <EnquiryModal/>
        <ChatButton/>
<Footer/>

    </main>
  );
}
