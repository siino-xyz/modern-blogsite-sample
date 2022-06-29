import { sprinkles } from "src/css-utils/sprinkles.css";
import Link from "next/link";
import * as styles from "./PostCard.css";
import * as React from "react";

interface PostCardProps {
  id: string;
  date: string;
  tag: string;
  title: string;
}

const PostCard = ({ frontMatter }: { frontMatter: PostCardProps[] }) => {
  return (
    <div>
      {frontMatter.map((post) => (
        <Link href={`/post/${post.id}`} key={post.id}>
          <div className={styles.card}>
            <div>
              <p
                className={sprinkles({
                  fontSize: "sm",
                })}
              >
                {post.date}
              </p>
              <p>{post.tag}</p>
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
