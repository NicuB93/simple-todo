import type { NextPage } from "next";
import Head from "next/head";
import { Main } from "../src/components/MainPage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Project practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
};

export default Home;
