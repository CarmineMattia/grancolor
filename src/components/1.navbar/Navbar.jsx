import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { Grid, Hidden, CardMedia } from "@mui/material";
import LogoImg from "../../assets/logoGrancolor.png";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Hidden smDown>
            <Grid item xs={8} container alignItems="center">
              <CardMedia
                component="img"
                sx={{ width: 75, height: 75 }}
                image={LogoImg}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", ml: 2 }}
              >
                GranColor
              </Typography>

              <Box sx={{ ml: 2 }}>
                <Button variant="text" color="inherit" component={Link} to="/">
                  Home
                </Button>
                {/* <Button
                  variant="text"
                  color="inherit"
                  component={Link}
                  to="/services"
                >
                  Servizi
                </Button> */}
                <Button
                  variant="text"
                  color="inherit"
                  component={Link}
                  to="/portfolio"
                >
                  Servizi
                </Button>
                <Button
                  variant="text"
                  color="inherit"
                  component={Link}
                  to="/gallery"
                >
                  Galleria
                </Button>
                {/* <Button
                  variant="text"
                  color="inherit"
                  component={Link}
                  to="/contatti"
                >
                  Contatti
                </Button> */}
              </Box>
            </Grid>
            <Grid item xs={4} container justifyContent="flex-end">
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
                onClick={() => (window.location.href = "tel:+393429244022")}
              >
                Chiama
              </Button>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={6} container alignItems="center">
              <CardMedia
                component="img"
                sx={{ width: 75, height: 75 }}
                image={LogoImg}
              />
              {/* <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", ml: 2 }}
              >
                GranColor
              </Typography> */}
            </Grid>
            <Grid item xs={6} container justifyContent="flex-end">
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{
                  // Apply styles to the menu items for small screens
                  ".MuiMenuItem-root": {
                    fontSize: { xs: "2.2rem", sm: "1rem" }, // Larger font size on small screens
                    padding: { xs: "1rem", sm: "0.5rem" }, // More padding on small screens
                  },
                }}
              >
                <MenuItem onClick={handleClose} component={Link} to="/">
                  Home
                </MenuItem>
                {/* <MenuItem onClick={handleClose} component={Link} to="/services">
                  Servizi
                </MenuItem> */}
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/portfolio"
                >
                  Servizi
                </MenuItem>
                {/* <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/call-to-action"
                >
                  Contatti
                </MenuItem> */}
                <MenuItem onClick={handleClose} component={Link} to="/gallery">
                  Galleria
                </MenuItem>

                <MenuItem
                  onClick={() => (window.location.href = "tel:+393429244022")}
                >
                  Chiama
                </MenuItem>
              </Menu>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
