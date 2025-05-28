import HeroSection from "./components/HeroSection";
import ServicesPreview from "./components/ServicesPreview";
import CallToAction from "./components/CallToAction";
import PresidentMessage from "./components/PresidentMessage";
import FAQ from "./components/FAQ";
import Collaborateurs from "./components/Collaborateurs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PresidentMessage />
      <ServicesPreview />
      <CallToAction />
      <FAQ />
      <Collaborateurs />
    </>
  );
}