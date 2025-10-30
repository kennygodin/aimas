import Image from "next/image";

interface Props {
  src: string;
  label: string;
  value: string;
}

const InfoCard = ({ src, label, value }: Props) => {
  return (
    <div className="bg-[#3B7355] shadow-[3px_3px_0_#000] py-5 px-5">
      <div className="flex gap-x-2 font-sora">
        <Image
          src={src}
          alt="alarm"
          width={50}
          height={50}
          priority
          className="w-14 h-auto"
        />
        <div className="text-white">
          <p className="font-medium">{label}</p>
          <h3 className="font-semibold text-lg">{value}</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
