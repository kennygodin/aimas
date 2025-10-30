import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Connecting = () => {
  return (
    <div className="py-20 bg-[#00579F]">
      <div className="max-w-360 mx-auto flex items-start">
        <div className="flex-1/3 space-y-6">
          <Image
            src="/images/connecting.svg"
            alt="connecting"
            width={200}
            height={100}
            priority
          />
          <h3 className="text-white font-clash text-3xl font-semibold">
            Connecting <span className="text-[#DB0404]">Platforms </span>,
            Powering <span className="text-[#DB0404]"> Parnership</span>
          </h3>
          <div className="space-x-4">
            <Button
              variant="heroPrimary"
              className="rounded-none font-sora h-11"
            >
              Register Now
            </Button>
            <Button
              variant="heroSecondary"
              className="rounded-none font-sora h-11"
            >
              Become an Exhibitor
            </Button>
          </div>
        </div>
        <div className="flex-2/3 flex items-start gap-10 text-white font-sora leading-8 font-medium">
          <div className="space-y-4">
            <p>
              The African Independent Media Marketing and Advertising Sales Expo
              (AIMAS) is a pioneering pan-African conference and exhibition
              designed to transform how media is marketed, sold, and monetized.{" "}
            </p>
            <p>
              It brings together media platforms, advertisers, marketing
              professionals, creative agencies, brands, and digital disruptors
              in one space to explore opportunities, tools, and innovations that
              drive growth.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              At its core, AIMAS exists to spotlight revenue-generating
              opportunities and create an environment where content creators,
              platforms, and brands can connect, collaborate, and close deals.
            </p>
            <p>
              AIMAS spotlights revenue opportunities across radio, TV, print,
              digital, and emerging platforms — blending learning, exhibitions,
              and deal-making to help participants grow, scale, and connect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connecting;
