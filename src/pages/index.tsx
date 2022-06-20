import Head from "next/head";
import Image from "next/image";
import NewmoBox from "../components/newmoBox/NewmoBox";
import Layout from "src/layouts/Layout";
import { IndexSprincles } from "./index.css";
export default function Home() {
  return (
    <Layout>
      <div className={`${IndexSprincles}`}>
        <NewmoBox />
      </div>
    </Layout>
  );
}
