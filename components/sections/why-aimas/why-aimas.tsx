import { Button } from "@/components/ui/button";
import ItemCard from "./item-card";

const WhyAimas = () => {
  const items = [
    {
      src: "/icons/crystal.svg",
      label: "Revolutionary Networking",
      desc: "Connect with industry leaders and innovators shaping the future of media sales",
      bg: "#DDF0FF",
    },
    {
      src: "/icons/graph.svg",
      label: "Cutting-Edge Insights",
      desc: "Discover the latest trends, technologies and strategies transforming media landscape",
      bg: "#FBF1E9",
    },
    {
      src: "/icons/plant.svg",
      label: "Strategic Growth",
      desc: "Learn proven methodologies to drive revenue and expand your market reach",
      bg: "#DFFFE5",
    },
    {
      src: "/icons/finance.svg",
      label: "Revenue & Monetization",
      desc: "Learn proven methodologies to drive revenue and expand your market reach",
      bg: "#FFE4F2",
    },
  ];

  return (
    <div className="py-20 bg-[#F5F9ED]">
      <div className="space-y-10 max-w-360 mx-auto">
        <h3 className="font-clash text-4xl font-semibold">Why AIMAS Matters</h3>

        <p className="font-sora font-medium leading-10 tracking-wider">
          The media landscape is evolving at an unprecedented pace. Traditional
          advertising models are being disrupted by programmatic buying,
          AI-driven targeting, and cross-platform attribution challenges. AIMAS
          provides a unique platform where industry leaders share real-world
          solutions, emerging technologies are demonstrated, and strategic
          partnerships are formed. It’s where the future of media sales is being
          written.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-7 gap-x-5 w-full mt-10">
          {items.map((item, index) => (
            <ItemCard
              key={index}
              bg={item.bg}
              desc={item.desc}
              src={item.src}
              label={item.label}
            />
          ))}
        </div>

        <div className="space-x-4">
          <Button variant="heroPrimary" className="rounded-none bg-[#DB0404] text-white font-sora h-11">
            Register Now
          </Button>
          <Button
            variant="heroSecondary"
            className="rounded-none border-[#DB0404] text-[#DB0404] font-sora h-11"
          >
            Become an Exhibitor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhyAimas;
