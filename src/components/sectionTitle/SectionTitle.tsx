import { sprinkles } from "src/css-utils/sprinkles.css";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div
      className={sprinkles({
        width: { mobile: "size-full", desktop: "size-4/5" },
        marginX: "size-auto",
      })}
    >
      <div
        className={sprinkles({
          background: "red-400",
          paddingX: "size-5",
          paddingY: "size-2",
          borderRadius: "br-2",
          display: { mobile: "inline-block", desktop: "inline-block" },
          marginX: "size-3",
        })}
      >
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
