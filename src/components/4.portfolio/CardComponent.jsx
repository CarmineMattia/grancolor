// CardComponent.jsx
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const CardComponent = ({
  imgSrc,
  title,
  description,
  handleCardClick,
  buttonText,
}) => {
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia component="img" maxheight="40" image={imgSrc} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ letterSpacing: "0.5px" }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleCardClick}>
          {buttonText || "Catalogo"}{" "}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
