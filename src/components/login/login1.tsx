import {
  TextField,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Container,
} from "@mui/material";

export default function Login1() {
  return (
    <>
      <Paper
        elevation={1}
        sx={{
          width: "100%",
          height: 50,
          borderRadius: 0,
          display: "flex",
          alignItems: "center",
          paddingX: 2,
          position: "fixed",
        }}
      >
        <Typography sx={{ fontSize: 20 }}>Web会議システム</Typography>
      </Paper>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          background: "rgba(1,1,1,0.05)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            background: "rgba(1,1,1,0.04)",
            width: "100%",
            padding: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            type="email"
            placeholder="sample@email.com"
            label="メールアドレス"
            variant="outlined"
            size="small"
            sx={{
              marginRight: 2,
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
              marginRight: 2,
            }}
          />

          <Button
            size="medium"
            variant="contained"
            sx={{
              marginRight: 3,
            }}
          >
            ログイン
          </Button>
        </Box>
      </Box>
    </>
  );
}
