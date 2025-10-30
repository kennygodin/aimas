import Image from "next/image";
import ItemCard from "./item-card";
import InfoCard from "./info-card";
import { Button } from "@/components/ui/button";

const Aimas = () => {
  const items = [
    { src: "/images/aimas2.png", label: "Media Sales Executives" },
    { src: "/images/aimas4.png", label: "Brand & Marketing Managers" },
    { src: "/images/aimas5.png", label: "Media Planners and Buyers" },
    { src: "/images/aimas6.png", label: "Advertisers & Sponsors" },
    { src: "/images/aimas3.png", label: "Creative & Content Producers" },
    { src: "/images/aimas7.png", label: "Tech Platform & Innovators" },
    { src: "/images/aimas8.png", label: "Journalists & Influencers" },
    { src: "/images/aimas9.png", label: "Media Owners" },
  ];

  const info = [
    {
      src: "/icons/calendar.svg",
      label: "Event Date",
      value: "8th October, 2010",
    },
    {
      src: "/icons/alarm.svg",
      label: "Event Time",
      value: "9:00 AM to 6:00 PM",
    },
    {
      src: "/icons/house.svg",
      label: "Event Venue",
      value: "Landmark Event Centre",
    },
  ];

  return (
    <div className="relative bg-[#2A513C] pt-20 pb-5 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/zig.svg"
          alt="zig background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col space-y-10 items-center justify-center w-full max-w-360">
        <Image
          src="/images/aimas.svg"
          alt="aimas"
          width={200}
          height={200}
          priority
          className="w-40 h-auto"
        />

        <h2 className="font-clash font-semibold text-[48px] text-white text-center">
          Connecting the Dots: Revolutionizing Media Sales
        </h2>

        <p className="font-sora font-medium tracking-wider mx-auto max-w-4xl leading-10 text-white text-center">
          AIMAS is more than an event — it’s a movement to transform Africa’s
          media sales landscape. By bringing together platforms, brands, and
          disruptors, AIMAS creates a space to unlock opportunities, drive
          innovation, and put African media at the center of the global stage.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-7 gap-x-5 w-full mt-10">
          {items.map((item, index) => (
            <ItemCard key={index} src={item.src} label={item.label} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 w-full">
          {info.map((item, index) => (
            <InfoCard
              key={index}
              src={item.src}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>

        <div className="space-x-4">
          <Button variant="heroPrimary" className="rounded-none font-sora h-11">
            Register Now
          </Button>
          <Button
            variant="heroSecondary"
            className="rounded-none font-sora h-11"
          >
            Become an Exhibitor
          </Button>
        </div>

        <p className="font-sora text-white font-medium">
          Download Sponsorship Deck
        </p>
      </div>
    </div>
  );
};

export default Aimas;
