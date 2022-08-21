import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Login1 from "../../../src/components/login/login1";
import Login2 from "../../../src/components/login/login2";

const Login: NextPage = () => {
  const router = useRouter();
  const { pattern } = router.query;
  const switchLoginLayout = (pattern: string) => {
    if (pattern === "1") {
      return <Login1 />;
    } else {
      return <Login2 />;
    }
  };
  return (
    <>
      <Head>
        <title>ログイン</title>
        <meta name="description" content="" />
      </Head>
      {switchLoginLayout(pattern as string)}

      <Link href="/">戻る</Link>
    </>
  );
};

export default Login;
