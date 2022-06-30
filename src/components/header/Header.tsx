import Link from "next/link";
import Image from "next/image";
import { sprinkles } from "src/css-utils/sprinkles.css";
import { buttonShadow, snsButton, header } from "./Header.css";
import DrawerButton from "../drawerButton/DrawerButton";

const Header = () => {
  return (
    <div className={header}>
      <div
        className={`${sprinkles({
          width: { mobile: "size-12", desktop: "size-14" },
          height: { mobile: "size-12", desktop: "size-14" },
          borderRadius: "br-3",
          flexGrow: { mobile: "1", desktop: "4" },
          display: "block",
        })}`}
      >
        <button
          className={`${sprinkles({
            width: { mobile: "size-12", desktop: "size-14" },
            height: { mobile: "size-12", desktop: "size-14" },
            borderRadius: "br-3",
          })} ${buttonShadow}`}
        ></button>
      </div>

      <div
        className={sprinkles({
          width: { mobile: "size-12", desktop: "size-14" },
          height: { mobile: "size-12", desktop: "size-14" },
          borderRadius: "br-3",
          flexGrow: { mobile: "1", desktop: "1" },
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
          gap: "size-5",
        })}
      >
        <Link href={"/"}>
          <button className={`${snsButton} ${buttonShadow}`}>
            <Image
              src={"/images/twitterLogo.svg"}
              alt="twitterLogo"
              width={31}
              height={26}
              layout="intrinsic"
            />
          </button>
        </Link>

        <DrawerButton />
      </div>
    </div>
  );
};

export default Header;
