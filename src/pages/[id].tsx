import Layout from "src/layouts/Layout";
import Head from "next/head";
import Date from "src/components/date";
import { getAllPostIds, getPostData } from "utils/post";
import PostsData from "types/postsData";

const post = ({ postData }: { postData: PostsData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
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
  return {
    props: {
      postData,
    },
  };
}
