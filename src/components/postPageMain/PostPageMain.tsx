import { sprinkles } from "src/css-utils/sprinkles.css";
import { MDXRemote } from "next-mdx-remote";
import { MdxComponents } from "../mdx/MdxComponents";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const PostPageMain = ({ source }: { source: MDXRemoteSerializeResult }) => {
  return (
    <>
      <main
        className={sprinkles({
          width: { mobile: "size-11/12", desktop: "size-8/12" },
          marginX: "size-auto",
        })}
      >
        <MDXRemote {...source} components={MdxComponents} />
      </main>
    </>
  );
};

export default PostPageMain;
