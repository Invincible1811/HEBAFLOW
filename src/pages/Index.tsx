import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SocialProofSection from "@/components/SocialProofSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
