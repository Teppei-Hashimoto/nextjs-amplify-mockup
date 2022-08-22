import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Typography, Box, Grid, Button } from "@mui/material";
import Link from "next/link";
import Layout from "../../src/components/layout";

const eventItems = [
  {
    eventId: 1,
    title: "イベント1",
    date: "2022-08-10",
    description: "イベント1の概要です",
    contents: {
      video: "https://www.youtube.com/embed/AcFCEgH9CiY",
    },
  },
  {
    eventId: 2,
    title: "イベント2",
    date: "2022-08-15",
    description: "イベント2の概要です",
    contents: {
      video: "https://www.youtube.com/embed/FMGXevQpP_8",
    },
  },
  {
    eventId: 3,
    title: "イベント3",
    date: "2022-08-30",
    description: "イベント3の概要です",
    contents: {
      video: "https://www.youtube.com/embed/tlVM8aqNPxg",
    },
  },
];

const Event: NextPage = () => {
  const router = useRouter();
  const { loginLayout } = router.query;
  return (
    <>
      <Head>
        <title>イベント一覧</title>
        <meta name="description" content="" />
      </Head>

      <Layout title="トップページ">
        <>
          <Typography
            sx={{ fontSize: 20, fontWeight: "bold", marginBottom: 2 }}
          >
            Top Page
          </Typography>
          <Grid container direction="column" sx={{ gap: 1, marginBottom: 3 }}>
            {eventItems.map((item, _index) => (
              <Grid
                item
                key={_index}
                sx={{
                  display: "flex",
                  bgcolor: "white",
                  padding: 2,
                  borderRadius: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: 14, marginLeft: 1 }}>
                    {item.date}
                  </Typography>
                </Box>
                <Link
                  as={`/event/${item.eventId}`}
                  href={{
                    pathname: "/event/[id]",
                    query: {
                      id: item.eventId,
                      title: item.title,
                      description: item.description,
                      url: item.contents.video,
                      loginLayout: loginLayout,
                    },
                  }}
                >
                  <Button variant="contained" sx={{ fontWeight: "bold" }}>
                    進む
                  </Button>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              as={`/auth/login`}
              href={{
                pathname: `/auth/login/[pattern]`,
                query: { pattern: loginLayout },
              }}
            >
              <Button variant="outlined" sx={{ fontWeight: "bold" }}>
                戻る
              </Button>
            </Link>
          </Box>
        </>
      </Layout>
    </>
  );
};

export default Event;
