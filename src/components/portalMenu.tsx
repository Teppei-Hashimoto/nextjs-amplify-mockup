import { Box, Paper, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function PortalMenu() {
  return (
    <>
      <Paper
        elevation={2}
        sx={{ minHeight: 300, padding: 2 }}
        style={{ backgroundColor: "#ECE0CF" }}
      >
        <Paper
          sx={{
            display: "flex",
            padding: 1,
            marginBottom: 1,
            alignItems: "center",
            gap: 1,
          }}
        >
          <CalendarMonthIcon />
          <Typography sx={{ fontSize: 14 }}>スケジュール</Typography>
        </Paper>
        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>Menu</Typography>
        <Paper
          sx={{
            display: "flex",
            padding: 1,
            marginBottom: 1,
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }}>メニュー1</Typography>
        </Paper>
        <Paper
          sx={{
            display: "flex",
            padding: 1,
            marginBottom: 1,
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }}>メニュー2</Typography>
        </Paper>
        <Paper
          sx={{
            display: "flex",
            padding: 1,
            marginBottom: 1,
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }}>メニュー3</Typography>
        </Paper>
        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
          Notice
        </Typography>
        <Box sx={{ padding: 1, bgcolor: "white" }}>
          <Typography sx={{ fontSize: 12, color: "red" }}>※ 注釈</Typography>
        </Box>
      </Paper>
    </>
  );
}
