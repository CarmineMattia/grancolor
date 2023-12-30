import React from "react";
import { Box, Typography, Button } from "@mui/material";

const CallToAction = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#003B73",
        padding: "3rem",
        textAlign: "center",
        color: "#FFFFFF",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        Domande o preventivo?
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem" }}></Typography>
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
        onClick={() => {
          window.location.href = "mailto:grazianograncolor@gmail.com";
        }}
      >
        E-MAIL
      </Button>

      <Box sx={{ marginTop: "2rem" }}>
        <Typography variant="body2">
          Seguici su Instagram: @grazianograncolor
        </Typography>
        <Typography variant="body2">
          Email: grazianograncolor@gmail.com
        </Typography>
        {/* Add more contact details as needed */}
      </Box>
    </Box>
  );
};

export default CallToAction;
