import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import YouTube from "react-youtube";
import cartongessoImg1 from "../../assets/cartongesso.png";

function TabPanel(props) {
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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Cartongesso() {
  const [value, setValue] = React.useState(0);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div style={{ position: "relative", height: "50vh", overflow: "hidden" }}>
        <img
          src={cartongessoImg1}
          alt="Cartongesso Work"
          style={{
            objectFit: "cover",
            objectPosition: "center center",
            width: "100%",
            height: "100%",
            maxHeight: "800px",
            position: "absolute",
            animation: "zoom 10s infinite linear",
            zIndex: -1,
          }}
        />
        <h1
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            zIndex: 2,
          }}
        >
          Cartongesso Work
        </h1>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Descrizione" {...a11yProps(0)} />
            <Tab label="Video" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <p>
            Graziano, un esperto di cartongesso, è stato recentemente coinvolto
            in un progetto di ristrutturazione di un antico loft situato nel
            cuore della città. Il cliente, un imprenditore alla ricerca di un
            moderno spazio di lavoro, si affidò all'esperienza e alla competenza
            di Graziano per trasformare il loft in un ambiente luminoso e
            funzionale.
          </p>
          <p>
            Metodico e attento, Graziano ha affrontato il progetto con
            precisione e dedizione. Ha iniziato tracciando linee, montando
            profili e installando il cartongesso con una precisione impeccabile.
            La sua solida esperienza nel settore gli ha permesso di superare con
            facilità ogni sfida incontrata lungo il percorso.
          </p>
          <p>
            Al termine delle settimane di lavoro, il risultato era stupefacente.
            Graziano aveva trasformato l'antico loft in uno spazio moderno e
            funzionale, rispecchiando esattamente le esigenze del cliente. Le
            pareti e il soffitto erano stati rifiniti a regola d'arte, offrendo
            una base ideale per la fase successiva di pittura e arredamento.
          </p>
          <p>
            Il cliente rimase estasiato davanti al lavoro di Graziano. La sua
            abilità nell'utilizzo del cartongesso aveva portato alla luce il
            pieno potenziale del loft, creando uno spazio di lavoro moderno e
            accogliente. Questo progetto riflette l'impegno costante di Graziano
            verso l'eccellenza e la sua passione per il suo mestiere.
          </p>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <YouTube videoId="KvZwyE2fztY" opts={opts} />
        </TabPanel>
      </Box>
    </div>
  );
}
