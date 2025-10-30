import Image from "next/image";

interface Props {
  src: string;
  label: string;
}

const ItemCard = ({ src, label }: Props) => {
  return (
    <div className="flex flex-col items-center text-center bg-white/10 overflow-hidden shadow-lg">
      <div className="relative w-full h-48">
        <Image src={src} alt={label} fill className="object-cover" priority />
      </div>
      <div className="bg-white w-full px-4 py-4">
        <p className="text-black font-sora font-semibold">{label}</p>
      </div>
    </div>
  );
};

export default ItemCard;
