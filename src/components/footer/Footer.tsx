import { sprinkles } from "src/css-utils/sprinkles.css";

const Footer = () => {
  return (
    <div
      className={sprinkles({
        width: { mobile: "size-full", desktop: "size-4/5" },
        marginX: "size-auto",
        paddingY: "size-3",
        paddingX: "size-3",
      })}
    >
      <div
        className={sprinkles({
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        })}
      >
        <p>vanilla-extract newmo</p>
      </div>
    </div>
  );
};

export default Footer;
