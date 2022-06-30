import Image from "next/image";
import { sprinkles } from "src/css-utils/sprinkles.css";
import Date from "src/components/date/Date";
import Tag from "src/components/tags/Tag";
import { frontMatterTypes } from "../../../types/postTypes";

const PostPageHeader = ({ frontMatter }: { frontMatter: frontMatterTypes }) => {
  return (
    <>
      <header
        className={sprinkles({
          marginBottom: "size-12",
          marginX: "size-auto",
          width: { mobile: "size-0.9", desktop: "size-9/12" },
        })}
      >
        <div
          className={sprinkles({
            marginX: "size-auto",
            textAlign: "center",
          })}
        >
          <Image
            src={frontMatter.thumbnailUrl}
            alt="thumbnail"
            layout="responsive"
            width={500}
            height={300}
            className={sprinkles({
              borderRadius: "br-2",
            })}
          />
        </div>
        <div
          className={sprinkles({
            display: "flex",
            flexDirection: "column",
            marginY: "size-6",
            marginX: "size-2",
          })}
        >
          <h1
            className={sprinkles({
              fontSize: "3xl",
              lineHeight: "3xl",
              paddingBottom: "size-1",
            })}
          >
            {frontMatter.title}
          </h1>
          <Date dateString={frontMatter.date} />
          <Tag tags={frontMatter.tags} />
        </div>
      </header>
    </>
  );
};

export default PostPageHeader;
