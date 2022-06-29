import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { getAllPostIds, getPostData } from "utils/post";
import { MDXRemote } from "next-mdx-remote";
import Layout from "src/layouts/Layout";
import Date from "src/components/date";
import Tag from "src/components/tags/Tag";
import { MdxComponents } from "../../components/mdx/MdxComponents";
import { PostsProps } from "../../../types/postTypes";
import { sprinkles } from "src/css-utils/sprinkles.css";

const post: NextPage<PostsProps> = ({ source, frontMatter }) => {
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
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
            width={500}
            height={300}
            layout="intrinsic"
            className={sprinkles({
              borderRadius: "br-2",
            })}
          />
        </div>
        <div
          className={sprinkles({
            display: "flex",
            flexDirection: "column",
            marginY: "size-3",
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
      <main
        className={sprinkles({
          width: { mobile: "size-11/12", desktop: "size-8/12" },
          marginX: "size-auto",
        })}
      >
        <MDXRemote {...source} components={MdxComponents} />
      </main>
    </Layout>
  );
};

export default post;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const source = postData.source;
  const frontMatter = postData.frontMatter;
  return {
    props: {
      postData,
      source,
      frontMatter,
    },
  };
}
