import { sprinkles } from "src/css-utils/sprinkles.css";
import Link from "next/link";
import * as styles from "./PostCard.css";
import PostsData from "types/postsData";

const PostCard = ({ posts }: { posts: PostsData[] }) => {
  return (
    <div>
      {posts.map((post) => (
        <Link href={"/"} key={post.id}>
          <div className={styles.card}>
            <div>
              <p
                className={sprinkles({
                  fontSize: "sm",
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
