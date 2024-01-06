import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import GalleryModal from "./GalleryModal";
// Import img names
import img2 from "../../assets/gallery/5E7D13B7_IMG_0382.webp";
import img4 from "../../assets/gallery/7A6A3350_IMG_1115.webp";
import img6 from "../../assets/gallery/8D96AF45_IMG_1068.webp";
import img7 from "../../assets/gallery/9BD5CAA2_IMG_1119.webp";
import img8 from "../../assets/gallery/9D20A426_IMG_1379.webp";
import img11 from "../../assets/gallery/46F698CD_IMG_0833.webp";
import img12 from "../../assets/gallery/77BB8B91_IMG_1368.webp";
import img13 from "../../assets/gallery/78B00545_IMG_1988 (1).webp";
import img15 from "../../assets/gallery/94CF15F3_IMG_0903.webp";
import img18 from "../../assets/gallery/3457F45B_IMG_0873.webp";
import img20 from "../../assets/gallery/186199A0_IMG_0734.webp";
import img21 from "../../assets/gallery/768085A5_IMG_1097.webp";
import img22 from "../../assets/gallery/925011BA_IMG_1418.webp";
import img23 from "../../assets/gallery/A0ADD949_IMG_0835.webp";
import img24 from "../../assets/gallery/A2C79955_IMG_0502.webp";
import img25 from "../../assets/gallery/A8B8DBED_IMG_0768.webp";
import img26 from "../../assets/gallery/A22B3365_IMG_0507.webp";
import img27 from "../../assets/gallery/AA0E733C_IMG_0469.webp";
import img30 from "../../assets/gallery/AB5645A8_IMG_0767.webp";
import img33 from "../../assets/gallery/B40314E2_IMG_0828.webp";
import img34 from "../../assets/gallery/C2B42011_IMG_1457.webp";
import img35 from "../../assets/gallery/C083C2CD_IMG_0872.webp";
import img36 from "../../assets/gallery/CDF3F314_IMG_0870.webp";
import img38 from "../../assets/gallery/D6AF4B5C_IMG_0868.webp";
import img39 from "../../assets/gallery/D32AAF55_IMG_1378.webp";
import img40 from "../../assets/gallery/E33B6381_IMG_1380.webp";
import img42 from "../../assets/gallery/EDEF0C1F_IMG_0748.webp";
import img43 from "../../assets/gallery/IMG-20230812-WA0002.webp";
import img44 from "../../assets/gallery/IMG20230720120321.webp";
import img48 from "../../assets/gallery/IMG20230722113237.webp";
import img49 from "../../assets/gallery/IMG20230722113256.webp";
import img50 from "../../assets/gallery/IMG20230808162129.webp";

export default function Gallery() {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  const [modalOpen, setModalOpen] = useState(false);
  const [, setSelectedImage] = useState({ before: "", after: "" });

  const limitedImageData = itemData.slice(0, 8); // First 8 images for the home screen

  const fullImageData = itemData; // Full set of images for the gallery page

  const location = useLocation();
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // Use pathname directly in the useEffect dependency array
    if (location.pathname === "/") {
      setImageData(limitedImageData);
    } else {
      setImageData(fullImageData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const handleNextImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % itemData.length);
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % itemData.length);
  // };

  // const handlePreviousImage = () => {
  //   setCurrentImageIndex(
  //     (prevIndex) => (prevIndex - 1 + itemData.length) % itemData.length
  //   );
  // };
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      // Check if the current route is the home page
      if (location.pathname === "/") {
        // Navigate only within the first 8 images for the home page
        return (prevIndex + 1) % limitedImageData.length;
      } else {
        // Navigate within the full set of images for the gallery page
        return (prevIndex + 1) % fullImageData.length;
      }
    });
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => {
      // Check if the current route is the home page
      if (location.pathname === "/") {
        // Navigate only within the first 8 images for the home page
        return (
          (prevIndex - 1 + limitedImageData.length) % limitedImageData.length
        );
      } else {
        // Navigate within the full set of images for the gallery page
        return (prevIndex - 1 + fullImageData.length) % fullImageData.length;
      }
    });
  };
  const handleImageClick = (item, index) => {
    setSelectedImage({ before: item.before, after: item.after });
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const getCols = () => {
    if (isXSmall) return 2;
    if (isMedium) return 4;
    return 3;
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: "1rem",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography variant="h4" style={{ paddingBottom: "1rem" }}>
        Galleria
      </Typography>
      <ImageList
        sx={{
          width: { xs: 350, md: 900 },
          height: { xs: 450, md: 850 },
          rowHeight: 164,
        }}
        cols={getCols()}
      >
        {imageData.map((item, index) => (
          <ImageListItem
            key={item.img}
            onClick={() => handleImageClick(item, index)}
          >
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <GalleryModal
        open={modalOpen}
        handleClose={handleCloseModal}
        beforeImage={imageData[currentImageIndex]?.before}
        afterImage={imageData[currentImageIndex]?.after}
        onNext={handleNextImage}
        onPrevious={handlePreviousImage}
      />
    </Box>
  );
}

const itemData = [
  {
    img: img34,
    title: "img34",
    before: img34,
    after: img34,
  },
  {
    img: img24,
    title: "img24",
    before: img24,
    after: img24,
  },

  {
    img: img2,
    title: "img2",
    before: img2,
    after: img2,
  },
  {
    img: img26,
    title: "img26",
    before: img26,
    after: img26,
  },
  {
    img: img27,
    title: "img27",
    before: img27,
    after: img36,
  },

  {
    img: img18,
    title: "img18",
    before: img18,
    after: img38,
  },

  {
    img: img12,
    title: "img12",
    before: img12,
    after: img12,
  },
  {
    img: img50,
    title: "img50",
    before: img50,
    after: img50,
  },

  {
    img: img42,
    title: "img42",
    before: img42,
    after: img23,
  },
  {
    img: img20,
    title: "img20",
    before: img20,
    after: img11,
  },

  // {
  //   img: img15,
  //   title: "img15",
  //   before: img15,
  //   after: img15,
  // },

  {
    img: img13,
    title: "img13",
    before: img13,
    after: img13,
  },
  {
    img: img21,
    title: "img21",
    before: img6,
    after: img21,
  },
  // {
  //   img: img25,
  //   title: "img25",
  //   before: img25,
  //   after: img25,
  // },
  {
    img: img30,
    title: "img30",
    before: img30,
    after: img25,
  },
  {
    img: img33,
    title: "img33",
    before: img33,
    after: img33,
  },

  // {
  //   img: img35,
  //   title: "img35",
  //   before: img35,
  //   after: img35,
  // },
  // {
  //   img: img36,
  //   title: "img36",
  //   before: img36,
  //   after: img36,
  // },

  // {
  //   img: img38,
  //   title: "img38",
  //   before: img38,
  //   after: img38,
  // },
  {
    img: img8,
    title: "img8",
    before: img8,
    after: img40,
  },
  {
    img: img22,
    title: "img22",
    before: img22,
    after: img22,
  },
  // {
  //   img: img39,
  //   title: "img39",
  //   before: img39,
  //   after: img39,
  // },
  // {
  //   img: img48,
  //   title: "img48",
  //   before: img48,
  //   after: img48,
  // },
  // {
  //   img: img44,
  //   title: "img44",
  //   before: img44,
  //   after: img44,
  // },
  {
    img: img49,
    title: "img49",
    before: img49,
    after: img44,
  },

  // {
  //   img: img4,
  //   title: "img4",
  //   before: img4,
  //   after: img4,
  // },
  {
    img: img7,
    title: "img7",
    before: img7,
    after: img4,
  },
  {
    img: img43,
    title: "img43",
    before: img43,
    after: img43,
  },
];
