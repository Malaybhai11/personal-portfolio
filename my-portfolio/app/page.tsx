import HeroSecMalay from "@/components/HeroSecMalay";
import AboutMalay from "@/components/AboutMalay";
import PricingMalay from "@/components/PricingMalay";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <HeroSecMalay />
      <AboutMalay />
      <PricingMalay />
    </main>
  );
}
