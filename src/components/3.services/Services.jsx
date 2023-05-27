import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const services = [
  {
    title: "Decorazioni:\n Tranforma pareti in opere d'arte!",
    description: `Dai vita alle tue pareti con la nostra decorazione su misura.\n
    Utilizziamo colori e tecniche artistiche uniche.\n
    Trasformiamo le pareti in opere d'arte che riflettono il tuo stile e la tua personalità.`,
    color: "#228B22",
  },
  {
    title: "Cartongesso su misura:",
    description: `Massimizza l'uso del tuo spazio con il cartongesso su misura.\n
    Pareti divisorie in cartongesso versatili e funzionali.\n
    Organizza l'ambiente secondo le tue esigenze.`,
    color: "#FF9900",
  },
  {
    title: "Calce Cruda:",
    description: `Dai alle tue pareti un aspetto rustico e naturale con la calce cruda.\n
    Tecnica tradizionale per un fascino senza tempo negli ambienti.\n
    Crea un'atmosfera calda e autentica.`,
    color: "#003B73 ",
  },
  {
    title: "Servizi personalizzati:",
    description: `Offriamo una gamma completa di servizi personalizzati.\n
    Tinteggiatura, smalti protettivi e altro ancora.\n
    Trasformiamo il tuo spazio secondo le tue specifiche richieste.`,
    color: "#DC143C",
  },
];

const ServicesSection = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1rem",
        overflow: "hidden",
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ paddingBottom: "3rem" }}>
        I nostri servizi
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: service.color,
                color: "white",
                boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 30px 0 rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1" component="div">
                  {service.description.split("\n").map((line, idx) =>
                    line.trim() ? (
                      <Typography
                        key={idx}
                        variant="body1"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          listStyle: "none",
                          paddingLeft: "1rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <ArrowRightIcon
                          sx={{ minWidth: "24px", marginRight: "8px" }}
                        />
                        {line.trim()}
                      </Typography>
                    ) : null
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
