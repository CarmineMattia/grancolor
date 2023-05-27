import React from "react";
import { Box, Typography } from "@mui/material";
import calceCrudaImg from "../../assets/calcecruda.png";
import ImageColorSelector from "./ColorImgSelector/ColorImageSelector";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";

const CalceCruda = () => {
  const colors = ["#fff", "#947466", "#c3ada0", "#dcbea9", "#b28676"];
  const colorText = ["0000", "16062", "17021", "20507", "20508"];

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
          Calce Cruda
        </Typography>
        <Typography
          variant="body1"
          align="center"
          style={{ marginBottom: "2rem" }}
        >
          La calce cruda è un rivestimento decorativo minerale, ideale per
          interni ed esterni. È un composto naturale, prodotto con calce e
          argilla, noto per la sua traspirabilità e la sua bellezza naturale.
          Questo materiale è apprezzato per la sua versatilità e la sua capacità
          di conferire un aspetto elegante e distintivo a qualsiasi spazio.
          Scorri in basso per selezionare il colore che meglio si adatta al tuo
          progetto.s
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
        imgSrc={calceCrudaImg}
        colors={colors}
        colorText={colorText}
        width="90%"
        height="90%"
        buttonSize={{ width: 40, height: 40 }}
      />
    </Box>
  );
};

export default CalceCruda;
