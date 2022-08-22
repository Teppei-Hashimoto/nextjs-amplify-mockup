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
        as={`/auth/login`}
        href={{
          pathname: "/auth/login/[pattern]",
          query: { pattern: "1" },
        }}
      >
        ログインページ1はこちら
      </Link>
      <br />
      <Link
        as={`/auth/login`}
        href={{
          pathname: "/auth/login/[pattern]",
          query: { pattern: "2" },
        }}
      >
        ログインページ2はこちら
      </Link>
    </>
  );
};

export default Home;
