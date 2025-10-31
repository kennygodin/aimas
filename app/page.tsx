import Aim from "@/components/sections/aim/aim";
import Hero from "@/components/sections/hero/hero";
import Opportunities from "@/components/sections/opportunities/opportunities";
import Packages from "@/components/sections/packages/packages";
import Sponsors from "@/components/sections/sponsors/sponsor";
import WhyAimas from "@/components/sections/why-aimas/why-aimas";

export default function Home() {
  return (
    <div>
      <Hero />
      <Sponsors />
      <Aim />
      <WhyAimas />
      <Opportunities />
      <Packages />
    </div>
  );
}
