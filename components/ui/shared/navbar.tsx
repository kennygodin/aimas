import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-20 py-4 h-20 flex items-center justify-center bg-[linear-gradient(to_right,white_0%,#fff8f8_10%,#8c2b3c_20%,#661F2B_100%)]">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={70} height={70} priority />
        </Link>

        <div className="hidden md:flex items-center font-sora font-medium space-x-12 text-white">
          <Link href="/" className="uppercase text-[15px]">
            Home
          </Link>
          <Link href="/jobs" className="uppercase text-[15px]">
            About
          </Link>
          <Link href="/contact" className="uppercase text-[15px]">
            Exhibitors
          </Link>
          <Link href="/about" className="uppercase text-[15px]">
            Sponsors & Partners
          </Link>
        </div>

        <div className="font-sora text-white font-medium">
          <Link className="uppercase text-[15px]" href="/">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
