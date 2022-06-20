import Head from "next/head";
import Image from "next/image";
import NewmoBox from "./components/newmoBox/NewmoBox";
import { IndexSprincles } from "./index.css";
export default function Home() {
  return (
    <div className={`${IndexSprincles}`}>
      <p>asdfasdf</p>
      <NewmoBox />
    </div>
  );
}
