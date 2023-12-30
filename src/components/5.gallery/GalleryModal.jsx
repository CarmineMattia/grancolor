import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ReactCompareImage from "react-compare-image";
import { Typography, useTheme, useMediaQuery, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const GalleryModal = ({
  open,
  handleClose,
  beforeImage,
  afterImage,
  onNext,
  onPrevious,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    width: isMobile ? "100%" : "80vw",
    height: isMobile ? "50%" : "80vh",
    overflow: "auto",
  };
  const isSameImage = beforeImage === afterImage;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {/* Prima - Dopo */}
        </Typography>
        {isSameImage ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src={beforeImage}
            alt="Displayed Image"
            style={{ width: "100%", height: "auto" }}
          />
        ) : (
          <ReactCompareImage
            leftImage={beforeImage}
            rightImage={afterImage}
            sx={{ mb: 2 }}
          />
        )}
        <IconButton
          onClick={onPrevious}
          style={{ position: "absolute", left: 10, top: "50%" }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          onClick={onNext}
          style={{ position: "absolute", right: 10, top: "50%" }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default GalleryModal;
