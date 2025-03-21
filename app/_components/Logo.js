import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        quality={100}
        height="80"
        width="80"
        alt="Bobobox logo"
      />
    </Link>
  );
}

export default Logo;
