import Head from "next/head";
import Image from "next/image";
import ArticleCard from "src/components/articleCard/ArticleCard";
import Layout from "src/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </Layout>
  );
}
