import { sprinkles } from "src/css-utils/sprinkles.css";
import Link from "next/link";
import * as styles from "./PostCard.css";
import * as React from "react";
import { frontMatterTypes } from "../../../types/postTypes";
import Tag from "../tags/Tag";

const PostCard = ({ frontMatter }: { frontMatter: frontMatterTypes[] }) => {
  return (
    <div>
      {frontMatter.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <div className={styles.card}>
            <div
              className={sprinkles({
                marginBottom: "size-3",
              })}
            >
              <p
                className={sprinkles({
                  fontSize: "xs",
                })}
              >
                {post.date}
              </p>
            </div>
            <h2
              className={sprinkles({
                fontSize: "lg",
                maxHeight: { mobile: "size-32", desktop: "size-32" },
              })}
            >
              {post.title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostCard;
