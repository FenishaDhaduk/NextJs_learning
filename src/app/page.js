"use client";

/** @jsxImportSource theme-ui */
import Image from "next/image";
import { Box, Container, Grid, Heading, Text } from "theme-ui";
import bannerImg from "@/app/assets/home.png";
import CustomNavbar from "@/components/CustomNavbar";

const Home = () => {


  
  return (
    <>
      <CustomNavbar />
      <Box sx={styles.banner} id="banner">
        <Container sx={styles.container}>
          <Grid sx={styles.grid}>
            <Box sx={styles.content}>
              <Heading as="h3">
                Great software is built with amazing developers
              </Heading>
              <Text as="p">
              Unlock your productivity potential with TaskHub. Sign up now to start managing tasks effortlessly!
              </Text>
            </Box>
            <Box sx={styles.image}>
              <Image src={bannerImg} alt="" />
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};


export default Home;

const styles = {
  banner: {
    pt: ["200px"],
    pb: ["50px", null, null, null, "60px", null, "0"],
    backgroundColor: "#F6F8FB",
    overflow: "hidden",
    height: "100vh",
  },
  container: {
    width: ["1390px"],
  },
  grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
  },
  content: {
    h3: {
      color: "black",
      fontWeight: "bold",
      lineHeight: [1.39],
      letterSpacing: ["-.7px", "-1.5px"],
      mb: ["20px"],
      width: ["100%"],
      maxWidth: ["540px"],
      fontSize: ["64px"],
    },
    p: {
      fontSize: ["18px"],
      lineHeight: [2.33],
      color: "text_secondary",
      mb: ["30px"],
      width: ["100%"],
      maxWidth: ["410px"],
      br: {
        display: ["none", null, null, null, "inherit"],
      },
    },
  },
  form: {
    mb: ["30px", null, null, null, null, "60px"],
    display: ["flex"],
    input: {
      borderRadius: ["4px"],
      backgroundColor: "#fff",
      width: ["240px", null, null, null, "315px", null, "375px"],
      height: ["45px", null, null, "55px", null, null, "65px"],
      padding: ["0 15px", null, null, "0 25px"],
      fontSize: [1, null, null, 2],
      border: "none",
      outline: "none",
      boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
    },
    button: {
      fontSize: [1, null, null, null, 2, "20px"],
      borderRadius: ["4px"],
      padding: ["0 15px"],
      ml: ["10px"],
      width: ["auto", null, null, null, "180px"],
    },
  },
  image: {
    img: {
      display: "flex",
      mixBlendMode: "darken",
      position: "relative",
      top: ["-40px"],
    },
  },
  partner: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    mb: ["40px"],
    "> div + div": {
      ml: ["10px", null, null, "20px", null, "30px"],
    },
    img: {
      display: "flex",
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: "#566272",
      lineHeight: [1],
      opacity: 0.6,
      display: "block",
      mb: ["20px", null, null, null, "0px"],
      mr: [null, null, null, null, "20px"],
      flex: ["0 0 100%", null, null, null, "0 0 auto"],
    },
  },
};
