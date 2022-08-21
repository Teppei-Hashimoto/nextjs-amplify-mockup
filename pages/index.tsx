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

      <Typography variant="h1" component="div" gutterBottom>
        ホームページ
      </Typography>
      <Link href="/auth/login">ログインページはこちら</Link>
      <br/>
      <Link href="/event/list">イベントページはこちら</Link>
    </>
  );
};

export default Home;
