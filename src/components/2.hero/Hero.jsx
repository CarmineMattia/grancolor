import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImg from "../../assets/heroImg1.png";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        height: "80vh",
        display: "flex",
        fontFamily: "Montserrat, sans-serif",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${heroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
        backgroundPosition: "center",
      }}
    >
      <Box padding={10}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
              marginBottom: "1rem",
            },
            textAlign: "center",
          }}
        >
          Trasforma i tuoi ambienti con stile!
        </Typography>
        <Typography
          variant="h5"
          paragraph
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.5rem",
            },
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Scopri il potere dei colori con Gran Color. Rinnova, rivitalizza e
          rendi unico il tuo spazio.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "#FF9900",
                "&:hover": {
                  backgroundColor: "#FF9900",
                  boxShadow: "0 0 5px 3px rgba(255, 153, 0, 0.5)",
                },
              }}
            >
              Scopri di più
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
