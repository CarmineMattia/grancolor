import React from "react";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Logo from "../../assets/logoGrancolor.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialMediaClick = (platform) => {
    // Handle the click event for each social media platform
    switch (platform) {
      case "facebook":
        // Handle Facebook click event
        break;
      case "instagram":
        // Handle Instagram click event
        break;
      case "whatsapp":
        // Handle WhatsApp click event
        break;
      case "email":
        // Handle Email click event
        break;
      default:
        break;
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: "#003B73",
        padding: "2rem",
        textAlign: "center",
        color: "#FFFFFF",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src={Logo}
          alt="Company Logo"
          style={{ height: "100px", marginRight: "0.5rem" }}
        />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Gran Color
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Typography variant="body2" sx={{ marginRight: "1rem" }}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon
              onClick={() => handleSocialMediaClick("facebook")}
              sx={{ color: "#1877F2" }}
            />
          </a>
        </Typography>
        <Typography variant="body2" sx={{ marginRight: "1rem" }}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              onClick={() => handleSocialMediaClick("instagram")}
              sx={{ color: "#E1306C" }}
            />
          </a>
        </Typography>
        <Typography variant="body2" sx={{ marginRight: "1rem" }}>
          <a
            href="https://api.whatsapp.com/send?phone=+393429244022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon
              onClick={() => handleSocialMediaClick("whatsapp")}
              sx={{ color: "#25D366" }}
            />
          </a>
        </Typography>
        <Typography variant="body2">
          <a href="mailto:grazianorapisarda.91@hotmail.it">
            <MailOutlineIcon
              onClick={() => handleSocialMediaClick("email")}
              sx={{ color: "#FFFFFF" }}
            />
          </a>
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ marginTop: "1rem", fontSize: "14px" }}>
        &copy; {currentYear} All rights reserved to Carmine Mattia Castello
      </Typography>
    </Box>
  );
};

export default Footer;
