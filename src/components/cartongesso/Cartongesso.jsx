import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import YouTube from "react-youtube";
import cartongessoImg1 from "../../assets/cartongesso.png";
import "../../../src/App"; // Assuming you have a CSS file for styles

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
            <Tab label="Video" {...a11yProps(0)} />
            <Tab label="Descrizione" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="video-responsive">
            <YouTube videoId="kIbBiU3N7E0" />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p>
            Trasforma il tuo spazio con Graziano: dove l'arte del cartongesso
            incontra l'innovazione. Scopri la semplicitàe lo stile!
          </p>
          {/* Other description paragraphs */}
        </TabPanel>
      </Box>
    </div>
  );
}
