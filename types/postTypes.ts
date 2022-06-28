import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface PostsProps {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: any };
}

export interface PostCardProps {
  frontMatter: { [key: string]: any };
}
