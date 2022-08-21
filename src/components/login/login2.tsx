import {
  TextField,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Container,
} from "@mui/material";

export default function Login2() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          background: "rgba(1,1,1,0.05)",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            width: "100%",
            height: 50,
            borderRadius: 0,
            display: "flex",
            alignItems: "center",
            paddingX: 2,
          }}
        >
          <Typography sx={{ fontSize: 20 }}>Web会議システム</Typography>
        </Paper>
        <Container
          maxWidth="xs"
          sx={{
            paddingTop: 15,
          }}
        >
          <Paper
            // variant="outlined"
            elevation={3}
            sx={{
              padding: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 10,
              borderRadius: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                marginBottom: 5,
              }}
            >
              ログイン②
            </Typography>
            <TextField
              type="email"
              placeholder="sample@email.com"
              label="メールアドレス"
              variant="outlined"
              size="small"
              sx={{
                width: "80%",
                marginBottom: 2,
              }}
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="パスワード"
              placeholder="パスワード"
              variant="outlined"
              size="small"
              sx={{
                width: "80%",
                marginBottom: 2,
              }}
            />
            <Grid item sx={{ alignSelf: "start", fontSize: 13, paddingTop: 2 }}>
              <a href="">メールアドレスを忘れた場合</a>
            </Grid>
            <Grid item sx={{ paddingTop: 2, alignSelf: "end" }}>
              <Button size="large" variant="contained">
                ログイン
              </Button>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
