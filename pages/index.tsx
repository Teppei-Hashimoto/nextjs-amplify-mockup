import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography gutterBottom>トップページ</Typography>
      <Link
        href={{
          pathname: "/auth/login/[pattern]",
          query: { pattern: "1" },
        }}
      >
        ログインページ1はこちら
      </Link>
      <br />
      <Link
        href={{
          pathname: "/auth/login/[pattern]",
          query: { pattern: "2" },
        }}
      >
        ログインページ2はこちら
      </Link>
      {/* <br />
      <Link href="/event/list">イベントページはこちら</Link> */}
    </>
  );
};

export default Home;
