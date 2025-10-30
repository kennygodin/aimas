import { Button } from "@/components/ui/button";
import Image from "next/image";

const Aim = () => {
  return (
    <div className="py-20 bg-[#DB0404]">
      <div className="space-y-10">
        <div className="max-w-360 mx-auto h-[350px]">
          <div className="flex gap-15 h-full">
            <div className="flex flex-3/5 space-x-4">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/scratch-v.svg"
                  alt="scratch"
                  width={70}
                  height={50}
                  className="object-contain"
                />
              </div>

              <div className="relative flex-1">
                <Image
                  src="/images/vision.png"
                  alt="vision"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-2/5 flex items-center">
              <div className="text-white space-y-4">
                <h2 className="font-clash text-4xl font-semibold">
                  The vision
                </h2>
                <p className="font-sora leading-10 font-medium tracking-wider">
                  To connect media platforms, brands, creatives & services
                  across Africa, showcasing their values preposition,
                  opportunities and future of media marketing.
                </p>

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
              <div className="flex items-center justify-center">
                <Image
                  src="/images/scratch-v.svg"
                  alt="scratch"
                  width={200}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <Image
            src="/images/aim-banner.svg"
            alt="sponsor-banner"
            width={1920}
            height={300}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-360 mx-auto h-[350px]">
          <div className="flex flex-row-reverse gap-15 h-full">
            <div className="flex flex-3/5 space-x-4">
              <div className="relative flex-1">
                <Image
                  src="/images/aimas10.png"
                  alt="vision"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/images/scratch-v.svg"
                  alt="scratch"
                  width={70}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex-2/5 flex gap-10 items-center">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/scratch-v.svg"
                  alt="scratch"
                  width={200}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="text-white space-y-4">
                <h2 className="font-clash text-4xl font-semibold">
                  The Mission
                </h2>
                <p className="font-sora leading-10 font-medium tracking-wider">
                  To showcase & unite Africa’s media platforms, agencies, and
                  brands in a single marketplace that sparks collaboration,
                  drives innovation, and unlocks new revenue opportunities.
                </p>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aim;
