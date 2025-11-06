import Aim from "@/components/sections/aim/aim";
import HowToExhibit from "@/components/sections/Exhibit/exhibit";
import Hero from "@/components/sections/hero/hero";
import Opportunities from "@/components/sections/opportunities/opportunities";
import Packages from "@/components/sections/packages/packages";
import Registration from "@/components/sections/registration/registration";
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
      <HowToExhibit />
      <Registration />
    </div>
  );
}
