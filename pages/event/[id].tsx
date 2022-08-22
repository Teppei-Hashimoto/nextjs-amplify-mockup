import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Typography, Box, Grid, Button, Card, CardMedia } from "@mui/material";
import Layout from "../../src/components/layout";
import Link from "next/link";

const EventView: NextPage = () => {
  const router = useRouter();
  const { id, title, description, url, loginLayout } = router.query;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />
      </Head>
      <Layout title={title as string}>
        <>
          <Grid container spacing={2} sx={{ height: "70vh" }}>
            <Grid
              container
              direction="column"
              item
              xs={8}
              sx={{ height: "100%" }}
            >
              <Grid item xs={8}>
                <iframe
                  style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: 4,
                  }}
                  src={url as string}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Grid>
              <Grid item>
                <Box sx={{ padding: 2 }}>
                  <Typography
                    sx={{ fontSize: 20, fontWeight: "bold", marginBottom: 2 }}
                  >
                    概要
                  </Typography>
                  <Typography>{description}</Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={4} sx={{ height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "white",
                  padding: 1,
                  border: 1,
                  height: 3 / 4,
                }}
              >
                <Typography>チャット表示</Typography>
              </Box>
            </Grid>
          </Grid>
          <Link
            as={`/event`}
            href={{ pathname: "/event", query: { loginLayout: loginLayout } }}
          >
            <Button variant="outlined" sx={{ fontWeight: "bold" }}>
              戻る
            </Button>
          </Link>
        </>
      </Layout>
    </>
  );
};

export default EventView;
