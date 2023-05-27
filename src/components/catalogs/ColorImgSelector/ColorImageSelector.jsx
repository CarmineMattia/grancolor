import React, { useState } from "react";
import {
  Box,
  ToggleButton,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";

const ImageColorSelector = ({
  imgSrc,
  colors,
  colorText,
  width,
  height,
  buttonSize,
}) => {
  const [selectedColor, setSelectedColor] = useState("#ffffff"); // Default color
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <Box
      width={width}
      height={height}
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      alignItems="center"
      justifyContent="space-between"
      border="2px solid #BFBFBF "
      padding="0.3rem"
      gap={4}
    >
      <Box>
        <img
          src={imgSrc}
          alt="material"
          style={{ width: "100%", backgroundColor: selectedColor }}
        />
      </Box>
      <Box display="flex" gap={2} flexWrap="wrap" maxWidth="100%">
        {colors.map((color, index) => (
          <Box key={index}>
            <ToggleButton
              sx={{
                width: buttonSize?.width || 50,
                height: buttonSize?.height || 50,
                backgroundColor: color,
                cursor: "pointer",
                border: selectedColor === color ? "2px solid #BFBFBF" : "",
                "&:hover": {
                  filter: "brightness(0.8)",
                  backgroundColor: color,
                },
              }}
              onClick={() => handleColorClick(color)}
            ></ToggleButton>
            {selectedColor === color && (
              <Typography>{colorText[index]}</Typography>
            )}
          </Box>
        ))}
      </Box>
      <Box></Box>
    </Box>
  );
};

export default ImageColorSelector;
