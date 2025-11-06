import { Button } from "@/components/ui/button";
import Image from "next/image";

const packagesData = [
  {
    id: 1,
    title: "Shell Booth",
    price: "₦1,000,000",
    borderColor: "#54A6FE",
    buttonColor: "#54A6FE",
    popular: false,
    features: [
      "3x3m Exhibition Space",
      "Basic Booth Setup",
      "Company Listing in Directory",
      "Access to Networking Sessions",
      "Digital Marketing Kit",
    ],
  },
  {
    id: 2,
    title: "Silver Booth",
    price: "₦1,500,000",
    borderColor: "#8DC53F",
    buttonColor: "#8DC53F",
    popular: true,
    features: [
      "3x3m Premium Exhibition Space",
      "4 Conference Passes",
      "Featured Company Profile",
      "Custom Booth Design for Branding",
      "Lead Generation Tools",
    ],
  },
  {
    id: 3,
    title: "Diamond Booth",
    price: "₦2,500,000",
    borderColor: "#FFD21E",
    buttonColor: "#FFD21E",
    popular: false,
    features: [
      "3x3m Premium Exhibition Space",
      "Custom Booth Design",
      "Desk, 2 Chairs and a Socket Outlet",
      "Feature in Event Magazine",
      "Prime Set Up Point at Event to Support Staff",
      "Social Media Marketing for Exhibitor's Brand",
    ],
  },
];

const Packages = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#61C1CF] to-[#F28408] pt-0 py-20">
      <div className="w-full mb-20">
        <div className="relative w-full">
          <Image
            src="/images/packages-bg.svg"
            alt="packages-banner"
            width={1920}
            height={300}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="max-w-360 mx-auto px-4">
        <div className="space-y-3 mb-12">
          <Image
            src="/images/aimas.svg"
            alt="aimas"
            width={200}
            height={200}
            priority
            className="w-40 h-auto"
          />
          <div className="font-clash text-2xl text-white font-semibold">
            Exhibition Opportunities
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="relative bg-black font-sora p-8 border-4 transition-transform hover:scale-105"
              style={{ borderColor: pkg.borderColor }}
            >
              {pkg.popular && (
                <div
                  className="px-4 py-2 mb-4 w-max text-black"
                  style={{ backgroundColor: pkg.borderColor }}
                >
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-white font-light">{pkg.title}</h3>
                  <p className="text-white text-4xl font-bold">{pkg.price}</p>
                </div>

                <div className="space-y-4">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="shrink-0 mt-1">
                        <Image
                          src="/icons/check-white.svg"
                          alt="check"
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                      </div>
                      <span className="text-white text-base leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full py-4 font-semibold text-black transition-opacity hover:opacity-90"
                  style={{ backgroundColor: pkg.buttonColor }}
                >
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-x-4 flex items-center justify-end mt-4">
          <Button
            variant="heroSecondary"
            className="rounded-none border-white bg-white text-black font-sora h-11"
          >
            Become an Exhibitor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
