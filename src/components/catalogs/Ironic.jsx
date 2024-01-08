import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Container } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush"; // Icon for painting/coating
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"; // Icon for aesthetic/dynamic effect
import InnovationIcon from "@mui/icons-material/Lightbulb"; // Icon for innovation
import ironicBigImg from "../../assets/ironic-img-bg.jpeg";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Ironic = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ margin: "2rem" }}
      >
        Ironic
      </Typography>
      <Container maxWidth="md">
        <img
          src={ironicBigImg}
          alt="Ironic Product"
          style={{ width: "100%", height: "auto" }}
        />
      </Container>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Descrizione" {...a11yProps(0)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <BrushIcon sx={{ mr: 1 }} /> Sistema a Base d'Acqua
          </Typography>
          <p>
            Ironic è un innovativo sistema decorativo a base d'acqua, che
            include una vernice di base (Ironic Fondo) e una finitura ossidativa
            (Ironic Liquido Antichizzante).
          </p>

          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <AutoAwesomeIcon sx={{ mr: 1 }} /> Effetto Estetico Dinamico
          </Typography>
          <p>
            La finitura ossidativa crea un effetto unico, simile all'ossidazione
            naturale del ferro, portando dinamicità e un'evoluzione estetica nel
            tempo alle superfici.
          </p>

          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <InnovationIcon sx={{ mr: 1 }} /> Innovazione e Tradizione
          </Typography>
          <p>
            Ironic rappresenta la fusione perfetta tra tradizione artigianale e
            innovazione tecnologica, offrendo diverse possibilità di
            personalizzazione e adattandosi alle richieste specifiche di ogni
            cliente.
          </p>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default Ironic;
