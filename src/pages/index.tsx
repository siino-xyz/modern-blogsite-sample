import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PostCard from "src/components/postCard/PostCard";
import Layout from "src/layouts/Layout";
import SectionTitle from "src/components/sectionTitle/SectionTitle";
import { getStoredPostsData } from "utils/post";
import CodeBlock from "src/components/codeBlock/CodeBlock";

export default function Home({ allPostData }) {
  return (
    <Layout>
      <SectionTitle title="ブログ記事一覧" />
      <div>
        <PostCard frontMatter={allPostData} />
      </div>
      <CodeBlock />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostData = getStoredPostsData();

  return {
    props: {
      allPostData,
    },
  };
}
