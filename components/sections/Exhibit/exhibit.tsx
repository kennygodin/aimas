import { Button } from "@/components/ui/button";
import Image from "next/image";

const exhibitData = [
  {
    id: 1,
    title: "Choose Your Package",
    desc: "Select the exhibition package that best fits your business objectives and budget",
    bg: "#FFF3E0",
    numBg: "#FFC04D",
  },
  {
    id: 2,
    title: "Complete Application",
    desc: "Fill out the exhibitor registration form with your company details and requirements",
    bg: "#E8F9E2",
    numBg: "#A3FF59",
  },
  {
    id: 3,
    title: "Confirmation & Payment",
    desc: "Receive the confirmation of your space and complete the payment process",
    bg: "#E0F5FC",
    numBg: "#59C3FF",
  },
  {
    id: 4,
    title: "Booth Setup & Success",
    desc: "Work with our team to design your booth and maximize your exhibition impact",
    bg: "#EEE9FF",
    numBg: "#B07EFF",
  },
];

const HowToExhibit = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center space-y-10">
        <div className="space-y-3 flex flex-col items-center">
          <Image
            src="/images/aimas.svg"
            alt="aimas"
            width={200}
            height={200}
            priority
            className="w-40 h-auto"
          />
          <div className="font-clash text-3xl font-semibold text-center">
            How to Exhibit
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          {exhibitData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-md font-sora space-y-4"
              style={{ backgroundColor: item.bg }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center font-semibold text-2xl text-black shadow-[3px_3px_0_#000]"
                style={{ backgroundColor: item.numBg }}
              >
                {item.id}
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  {item.title}
                </h3>
                <p className="text-[#333] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-x-4">
          <Button
            variant="heroPrimary"
            className="rounded-none bg-[#DB0404] text-white font-sora h-11 px-8 shadow-[3px_3px_0_#000]"
          >
            Register Now
          </Button>
          <Button
            variant="heroSecondary"
            className="rounded-none border-2 border-[#DB0404] text-[#DB0404] font-sora h-11 px-8 shadow-[3px_3px_0_#000]"
          >
            Become an Exhibitor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowToExhibit;
