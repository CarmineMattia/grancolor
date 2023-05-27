import React from "react";
import { Box, Typography } from "@mui/material";
import mirrorImg from "../../assets/mirror.png";
import ImageColorSelector from "./ColorImgSelector/ColorImageSelector";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";

const Mirror = () => {
  const colors = [
    "#fff",
    "#cfd2d7",
    "#948f8c",
    "#839ba3",
    "#27637b",
    "#7a5b54",
    "#686f80",
    "#B28B7F", // Marrone Scuro
    "#6B4423", // Brown
    "#967117", // Golden Brown
    "#9C661F", // Dark Goldenrod
    "#646A58", // Dark Olive Green
    "#6E7783", // Light Slate Grey
    "#003153", // Prussian Blue
    "#C9A0DC", // Light Pastel Purple
  ];
  const colorText = [
    "0000",
    "15700",
    "15701",
    "15702",
    "15703",
    "15704",
    "15708",
    "15710", // Marrone Scuro
    "15711", // Brown
    "15712", // Golden Brown
    "15713", // Dark Goldenrod
    "15714", // Dark Olive Green
    "15715", // Light Slate Grey
    "15716", // Prussian Blue
    "15717", // Light Pastel Purple
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      padding="3rem"
    >
      <Box>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ marginBottom: "2rem" }}
        >
          Mirror
        </Typography>
        <Typography
          variant="body1"
          align="center"
          style={{ marginBottom: "2rem" }}
        >
          Mirror è uno stucco a base di calce extra lucido, ideale per la
          decorazione di superfici interne. Questo prodotto offre una finitura
          liscia, lucida e riflettente, simile a uno specchio, donando eleganza
          e raffinatezza a ogni ambiente. Il suo aspetto moderno e distintivo fa
          di Mirror una scelta eccellente per aggiungere un tocco di lusso al
          tuo spazio. Scorri in basso per selezionare il colore perfetto per il
          tuo progetto.
        </Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <FormatColorFillIcon />
        </Box>
      </Box>
      <ImageColorSelector
        imgSrc={mirrorImg}
        colors={colors}
        colorText={colorText}
        width="90%"
        height="90%"
        buttonSize={{ width: 40, height: 40 }}
      />
    </Box>
  );
};

export default Mirror;
