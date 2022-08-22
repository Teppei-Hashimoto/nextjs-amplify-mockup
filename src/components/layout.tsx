import Header from "./header";
import Footer from "./footer";
import { Container, Grid } from "@mui/material";
import PortalMenu from "./portalMenu";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Header title={title}></Header>
      <main
        style={{
          minHeight: "80vh",
          backgroundColor: "#EDF6F8",
          boxSizing: "border-box",
        }}
      >
        <Container maxWidth="lg" sx={{ padding: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <PortalMenu></PortalMenu>
            </Grid>
            <Grid item xs={9}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
