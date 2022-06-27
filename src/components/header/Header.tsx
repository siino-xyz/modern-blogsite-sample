import Link from "next/link";
import Image from "next/image";
import { sprinkles } from "src/css-utils/sprinkles.css";
import { style } from "@vanilla-extract/css";

import { snsButton, header, line } from "./Header.css";

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
          className={sprinkles({
            background: "white",
            width: { mobile: "size-12", desktop: "size-14" },
            height: { mobile: "size-12", desktop: "size-14" },
            borderRadius: "br-3",
          })}
        ></button>
      </div>
      {/* <div
        className={sprinkles({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexGrow: "1",
          justifyContent: "flex-end",
        })}
      >

      </div> */}
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
          gap: "size-3",
        })}
      >
        <Link href={"/"}>
          <button className={snsButton}>
            <Image
              src={"/images/twitterLogo.svg"}
              alt="twitterLogo"
              width={31}
              height={26}
              layout="intrinsic"
            />
          </button>
        </Link>
        <button
          className={sprinkles({
            background: "white",
            width: { mobile: "size-12", desktop: "size-14" },
            height: { mobile: "size-12", desktop: "size-14" },
            borderRadius: "br-3",
            position: "relative",
          })}
        >
          <span className={line}></span>
          <span className={line}></span>
          <span className={line}></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
