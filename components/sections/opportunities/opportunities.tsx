import { Button } from "@/components/ui/button";
import Image from "next/image";

const Opportunities = () => {
  const items = [
    {
      text: "Direct access to 500+ industry decision makers",
    },
    {
      text: "Generate qualified leads and build your sales pipeline",
    },
    {
      text: "Showcase your latest products and innovations",
    },
    {
      text: "Network with key stakeholders and potential partners",
    },
    {
      text: "Gain market insights and competitive intelligence",
    },
    {
      text: "Establish thought leadership in your field",
    },
  ];

  return (
    <div className="py-20 max-w-360 mx-auto">
      <div className="flex items-center gap-20">
        <div className="flex-1 relative h-[707px]">
          <Image
            src="/images/aimas11.png"
            alt="aimas"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 space-y-6">
          <Image
            src="/images/aimas.svg"
            alt="aimas"
            width={200}
            height={200}
            priority
            className="w-40 h-auto"
          />
          <div className="bg-[#8DC53F] shadow-[3px_3px_0_#000] w-max font-clash text-2xl font-semibold py-5 px-5">
            Exhibition Opportunities
          </div>

          <p className="font-sora leading-8 font-medium">
            Position your brand at the forefront of media innovation. Connect
            with industry leaders, showcase your solutions, and drive meaningful
            business growth.
          </p>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="shrink-0 mt-1">
                  <Image
                    src="/icons/check-all.svg"
                    alt="check"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>
                <p className="flex-1 font-sora text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="space-x-4">
            <Button
              variant="heroPrimary"
              className="rounded-none bg-[#DB0404] text-white font-sora h-11"
            >
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
    </div>
  );
};

export default Opportunities;
