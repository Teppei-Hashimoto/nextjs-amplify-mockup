import { Box, AppBar, Toolbar, Typography } from "@mui/material";

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <>
      <header>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            paddingY: 1,
            paddingX: 2,
            backgroundColor: "#C8E8F0",
          }}
        >
          <Typography display="block" sx={{ fontSize: 24, fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
      </header>
    </>
  );
}
