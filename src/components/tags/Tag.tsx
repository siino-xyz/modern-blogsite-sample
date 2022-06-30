import { sprinkles } from "src/css-utils/sprinkles.css";
import { boxShadow } from "./Tag.css";

const Tag = ({ tags }: { tags: string[] }) => {
  return (
    <div
      className={sprinkles({
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: "size-5",
        marginY: "size-4",
      })}
    >
      {tags.map((tag) => (
        <button
          key={tag}
          className={`${sprinkles({
            background: { lightMode: "white", darkMode: "blackLiner" },
            paddingX: "size-3",
            paddingY: "size-2",
            color: "white",
            fontSize: "sm",
            borderRadius: "br-5",
          })} 
              ${boxShadow}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tag;
