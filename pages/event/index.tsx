import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";
import Link from "next/link";

const Event: NextPage = () => {
  return (
    <>
      <Head>
        <title>イベント一覧</title>
        <meta name="description" content="" />
      </Head>

      <Typography variant="h1" component="div" gutterBottom>
        イベント一覧画面
      </Typography>
      <Typography variant="h3" component="div" gutterBottom>
        イベント１
      </Typography>
      <Typography variant="h3" component="div" gutterBottom>
        イベント2
      </Typography>
      <Link href="/">戻る</Link>
    </>
  );
};

export default Event;
