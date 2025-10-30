import Image from "next/image";

interface Props {
  src: string;
  label: string;
  bg: string;
  desc: string;
}

const ItemCard = ({ src, label, bg, desc }: Props) => {
  return (
    <div
      className="p-6 space-y-4 overflow-hidden font-sora"
      style={{ background: bg }}
    >
      <div className="relative w-full">
        <Image
          src={src}
          alt={label}
          width={60}
          height={60}
          className="object-cover"
          priority
        />
      </div>
      <h5 className="font-semibold">{label}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default ItemCard;
