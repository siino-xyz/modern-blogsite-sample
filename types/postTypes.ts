import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface PostsProps {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    [key: string]: any;
  };
}
export type MDXSourceTypes = {
  source: MDXRemoteSerializeResult;
};
export type frontMatterTypes = {
  [key: string]: any;
};
