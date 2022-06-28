import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { getAllPostIds, getPostData } from "utils/post";
import { MDXRemote } from "next-mdx-remote";
import Layout from "src/layouts/Layout";
import Date from "src/components/date";
import { MdxComponents } from "../components/mdx/MdxComponents";
import { PostsProps } from "../../types/postTypes";
import { sprinkles } from "src/css-utils/sprinkles.css";

const post: NextPage<PostsProps> = ({ source, frontMatter }) => {
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <header>
        <Image
          src={frontMatter.thumbnailUrl}
          alt="thumbnail"
          width={500}
          height={300}
          layout="intrinsic"
        />
        <div
          className={sprinkles({
            display: "flex",
            flexDirection: "column",
            background: "red-400",
          })}
        >
          <h2>{frontMatter.title}</h2>
          <div
            className={sprinkles({
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            })}
          >
            <Date dateString={frontMatter.date} />
            <p>{frontMatter.tag}</p>
          </div>
        </div>
      </header>
      <main>
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
