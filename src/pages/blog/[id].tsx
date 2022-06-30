import { NextPage } from "next";
import Head from "next/head";
import { getAllPostIds, getPostData } from "utils/post";
import Layout from "src/layouts/Layout";
import PostPageHeader from "src/components/postPageHeader/postPageHeader";
import PostPageMain from "src/components/postPageMain/PostPageMain";
import { PostsProps } from "../../../types/postTypes";

const post: NextPage<PostsProps> = ({ source, frontMatter }) => {
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <PostPageHeader frontMatter={frontMatter} />
      <PostPageMain source={source} />
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
