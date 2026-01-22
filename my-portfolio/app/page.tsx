import HeroSecMalay from "@/components/HeroSecMalay";
import AboutMalay from "@/components/AboutMalay";
import PricingMalay from "@/components/PricingMalay";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Malay Raval",
    url: "https://malayraval.com",
    jobTitle: "Fullstack Developer & DevOps Engineer",
    sameAs: [
      "https://www.linkedin.com/in/malay-raval-2708b8307/",
      "https://www.github.com/Malaybhai11",
      "https://twitter.com/malay_raval", // Add if available
      "https://wa.me/917016870163"
    ],
    worksFor: {
      "@type": "Organization",
      "name": "Freelance / Open to Work"
    },
    description: "Expert Fullstack Developer & DevOps Engineer specializing in Next.js, React, Node.js, and Cloud Infrastructure."
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSecMalay />
      <AboutMalay />
      <PricingMalay />
    </main>
  );
}
