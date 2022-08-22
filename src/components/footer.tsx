import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <footer>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            padding: 2,
          }}
        >
          <Typography>Copyright © xxxxx Inc. All Rights Reserved.</Typography>
        </Box>
      </footer>
    </>
  );
}
