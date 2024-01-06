import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import ironicBigImg from "../../assets/ironic-bigimg.png";
// Import icons
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";

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
        gutterTop
        style={{ margin: "2rem" }}
      >
        Ironic
      </Typography>
      <img
        src={ironicBigImg}
        alt="Ironic Product"
        style={{ width: "100%", height: "auto" }}
      />

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Descrizione" {...a11yProps(0)} />
          <Tab label="Caratteristiche" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <p>
          IRONic è un sistema a base d'acqua composto da una vernice di base
          (IRONic Fondo) e una finitura ossidativa (IRONic Liquido
          Antichizzante). L'applicazione di IRONic Liquido Antichizzante su
          IRONic Fondo genera un effetto ossidativo identico a quello di una
          superficie di ferro esposta alla corrosione naturale degli agenti
          atmosferici. Le superfici trattate con IRONic sono dinamiche e
          l'estetica può cambiare nel tempo. IRONic rappresenta un ponte tra
          tradizione e innovazione, offrendo un sistema decorativo basato su
          polimeri che permette di ottenere diversi effetti di ossidazione,
          rispondendo alle esigenze specifiche dei clienti.
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          <WaterDropIcon sx={{ mr: 1 }} /> Diluizione
        </Typography>
        <p>
          Ironic fondo: dilute with 25-35% of water, for both the first and
          second layer.
        </p>

        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          <OpacityIcon sx={{ mr: 1 }} /> Resa
        </Typography>
        <p>
          Ironic fondo: 5-8 m2/l in two layers; ironic liquido antichizzante:
          8-12 m2/l in two layers.
        </p>

        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          <AirIcon sx={{ mr: 1 }} /> Indoor air quality
        </Typography>
        <p>A+</p>
      </TabPanel>
    </Box>
  );
};

export default Ironic;
