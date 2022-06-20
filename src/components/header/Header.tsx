import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div></div>
      <div>
        <Link href={"/"}>
          <Image
            src={"/images/twitterLogo.svg"}
            alt="twitterlink"
            width={31}
            height={26}
            layout="intrinsic"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/images/emailLogo.svg"}
            alt="emaillink"
            width={25}
            height={25}
            layout="intrinsic"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
