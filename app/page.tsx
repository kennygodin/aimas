import Aim from "@/components/sections/aim/aim";
import Hero from "@/components/sections/hero/hero";
import Sponsors from "@/components/sections/sponsors/sponsor";
import WhyAimas from "@/components/sections/why-aimas/why-aimas";

export default function Home() {
  return (
    <div>
      <Hero />
      <Sponsors />
      <Aim />
      <WhyAimas />
    </div>
  );
}
