import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CardComponent from "../4.portfolio/CardComponent";
import { useNavigate } from "react-router-dom";

// Import images
import calceCrudaImg from "../../assets/calceCruda1.png";
import mirror1Img from "../../assets/mirror1.jpg";
import ironicImg from "../../assets/ironic1.png";

const CatalogoDecori = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    if (index === 0) {
      // Navigate to /calce-cruda
      navigate("/calce-cruda");
    } else if (index === 1) {
      // Handle card click for the second card
      navigate("/Mirror");
    } else if (index === 2) {
      // Handle card click for the second card
      navigate("/Ironic");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: "3rem",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.12)",
      }}
    >
      <Typography variant="h4">Catalogo Decori</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          width: "100%",
        }}
      >
        <CardComponent
          imgSrc={calceCrudaImg}
          title="Calce Cruda"
          description="Decorazione naturale per un fascino autentico."
          buttonText="vedi colori"
          handleCardClick={() => handleCardClick(0)}
        />

        <CardComponent
          imgSrc={mirror1Img}
          title="Mirror"
          description="Rifletti l'eleganza con una finitura lussuosa."
          buttonText="vedi colori"
          handleCardClick={() => handleCardClick(1)}
        />
        <CardComponent
          imgSrc={ironicImg}
          title="Ironic"
          description="Rivestimento decorativo con effetto ruggine, per interni ed esterni"
          buttonText="vedi colori"
          handleCardClick={() => handleCardClick(2)}
        />
        {/* <CardComponent
          // imgSrc={pietra1Img}
          title="Pietra Spaccata"
          description=""
          buttonText="vedi colori"
          handleCardClick={() => handleCardClick(1)}
        />
        <CardComponent
          // imgSrc={desert1Img}
          title="Aplha Desert"
          description="Lorem ipsum dolor sit amet."
          buttonText="vedi colori"
          handleCardClick={() => handleCardClick(1)}
        /> */}
      </Box>
    </Box>
  );
};

export default CatalogoDecori;
