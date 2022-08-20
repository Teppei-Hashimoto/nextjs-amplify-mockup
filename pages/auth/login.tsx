import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>ログイン</title>
        <meta name="description" content="" />
      </Head>

      <Typography variant="h1" component="div" gutterBottom>
        ログイン
      </Typography>
      <Link href="/">戻る</Link>
    </>
  );
};

export default Login;
