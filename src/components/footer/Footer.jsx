import React from "react";
import { Box, Typography, Grid, Link, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Logo from "../../assets/logoGrancolor.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        padding: "3rem",
        color: "#666",
        borderTop: "1px solid #ddd",
        // mt: "4rem",
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={4}>
          <Box textAlign="center">
            <img
              src={Logo}
              alt="Company Logo"
              style={{ height: "80px", marginBottom: "1rem" }}
            />
            <Typography variant="h6" gutterBottom>
              Gran Color
            </Typography>
            <Typography variant="body2">Bringing colors to life.</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" gutterBottom>
            Contattaci
          </Typography>
          <Typography variant="body2">Telefono: +39 342 924 4022</Typography>
          <Typography variant="body2">
            Email: grazianograncolor@gmail.com
          </Typography>
          <Typography variant="body2">
            Indirizzo: Reggio nell' Emilia, Italia
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" gutterBottom>
            Follow Us
          </Typography>
          <Box display="flex" justifyContent="">
            <Link
              href="https://www.facebook.com/profile.php?id=61555270764555"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon sx={{ color: "#1877F2", marginRight: "10px" }} />
            </Link>
            <Link
              href="https://www.instagram.com/grazianograncolor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon sx={{ color: "#E1306C", marginRight: "10px" }} />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=+393429244022"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon sx={{ color: "#25D366" }} />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography
        variant="body2"
        sx={{ textAlign: "center", fontSize: "14px" }}
      >
        &copy; {currentYear} All rights reserved to Carmine Mattia Castello
      </Typography>
    </Box>
  );
};

export default Footer;
