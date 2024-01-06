// Portfolio.jsx
import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import portfolioImg1 from "../../assets/card1.jpg";
import portfolioImg2 from "../../assets/portfolio-card-1.webp";
import CardComponent from "./CardComponent";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    if (index === 0) {
      // Navigate to /catalogoDecori
      navigate("/catalogoDecori");
    } else if (index === 1) {
      // Handle card click for the second card
      navigate("/cartongesso");
    }
  };

  const description1 = (
    <>
      {/* Vuoi creare un ambiente unico? Con le nostre competenze artistiche e le
      pitture murali innovative, trasformiamo il tuo spazio in un'opera d'arte
      che cattura l'attenzione. Un muro personalizzato può elevare la tua
      attività e creare un ambiente stimolante. Lascia che la nostra creatività
      porti il tuo business a un nuovo livello! */}
      {/* <ul style={{ width: "100px", marginBottom: "10px" }}>
        <li style={{ marginTop: "10px", marginBottom: "10px" }}>Calce Cruda</li>
        <li style={{ marginTop: "10px", marginBottom: "10px" }}>
          Pietra Spaccata
        </li>
        <li style={{ marginTop: "10px", marginBottom: "10px" }}>Mirror</li>
        <li style={{ marginTop: "10px", marginBottom: "10px" }}>
          Alpha Desert
        </li>
      </ul> */}
    </>
  );

  const description2 = (
    <>
      {/* Entra nel mondo affascinante della ristrutturazione con i nostri esperti
      imbianchini e cartongessisti. Trasformiamo gli spazi in posti eleganti
      grazie alla nostra abilità e maestria. Con anni di esperienza nel settore,
      creiamo ambienti raffinati e accoglienti combinando l'arte
      dell'imbiancatura con l'uso sapiente del cartongesso. Scopri come i nostri
      professionisti possono trasformare anche il loft più rudimentale in un
      ambiente elegante e moderno, pronto ad accogliere le tue idee e le tue
      esigenze. */}
      {/* <ul></ul> */}
    </>
  );

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
      <Typography variant="h4">Servizi</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          width: "50%",
        }}
      >
        <CardComponent
          sx={{ minWidth: 345 }}
          imgSrc={portfolioImg1}
          title="Tinteggio"
          description={description1}
          handleCardClick={() => handleCardClick(0)}
        />
        <CardComponent
          imgSrc={portfolioImg2}
          sx={{ maxWidth: 350 }}
          title="Cartongesso"
          description={description2}
          handleCardClick={() => handleCardClick(1)}
        />
      </Box>
    </Box>
  );
};

export default Portfolio;
