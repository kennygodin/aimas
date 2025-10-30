import Image from "next/image";

const TopBanner = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/images/sponsor-banner.svg"
        alt="sponsor-banner"
        width={1920}
        height={300}
        priority
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h5 className="font-sora text-white text-[18px] font-semibold text-center">
          SPONSORS & PARTNERS
        </h5>
      </div>
    </div>
  );
};

export default TopBanner;
