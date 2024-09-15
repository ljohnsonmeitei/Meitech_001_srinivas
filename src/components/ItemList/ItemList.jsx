import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const itemData = [
  {
    img: "https://media.istockphoto.com/id/1778738751/photo/summer-is-over-in-the-garden.jpg?s=2048x2048&w=is&k=20&c=wBTIo_R9VEfKJzlRj7xnCVF2e8Tj_oIDNo5hpzveu3o=",
    title: "House ",
  },
  {
    img: "https://media.istockphoto.com/id/1755445620/photo/row-of-single-story-homes.jpg?s=2048x2048&w=is&k=20&c=2L5Np9OC-LSjd5aP0GiqAOBaJ7c_J4HbGWkv7_4DMg8=",
    title: "Villa",
  },
  {
    img: "https://media.istockphoto.com/id/2155879397/photo/house-in-a-charming-neighborhood-with-stunning-sidewalk-landscaping.jpg?s=2048x2048&w=is&k=20&c=kiXfFSGT_7RN2w3aTofRz5FioHrOfkTeTnOwCxLi-F0=",
    title: "House",
  },
  {
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hut",
  },
  {
    img: "https://media.istockphoto.com/id/2149088667/photo/3d-rendering-of-modern-house-in-luxurious-style-in-night.jpg?s=2048x2048&w=is&k=20&c=riZJg2BQtyuPHM3UAc_t_FSwVBpGFoMI1UPlDqLe294=",
    title: "Apartment",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=2534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "House",
  },
  {
    img: "https://media.istockphoto.com/id/1755445620/photo/row-of-single-story-homes.jpg?s=2048x2048&w=is&k=20&c=2L5Np9OC-LSjd5aP0GiqAOBaJ7c_J4HbGWkv7_4DMg8=",
    title: "Villa",
  },
  {
    img: "https://media.istockphoto.com/id/1778738751/photo/summer-is-over-in-the-garden.jpg?s=2048x2048&w=is&k=20&c=wBTIo_R9VEfKJzlRj7xnCVF2e8Tj_oIDNo5hpzveu3o=",
    title: "House ",
  },
  {
    img: "https://media.istockphoto.com/id/2149088667/photo/3d-rendering-of-modern-house-in-luxurious-style-in-night.jpg?s=2048x2048&w=is&k=20&c=riZJg2BQtyuPHM3UAc_t_FSwVBpGFoMI1UPlDqLe294=",
    title: "Apartment",
  },
  {
    img: "https://media.istockphoto.com/id/1597660474/photo/birds-eye-view-of-home.jpg?s=2048x2048&w=is&k=20&c=tH_tuVUuBe3CBv03Z6mmkRgvIeD-rFhSDY8Yr9MOjjo=",
    title: "House",
  },
];

function ImageMasonry() {
  const carouselRef = useRef(null);

  // Scroll handler
  const scroll = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: 0,
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="font-lexend text-[#F59E0B] font-medium mb-2 text-[1rem] leading-[1rem] flex gap-2 items-center">
        <svg
          width="32"
          height="1"
          viewBox="0 0 32 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="1" fill="#F59E0B" />
        </svg>
        Our Recommendation
      </div>
      <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div className="font-lexend font-semibold text-[2.8rem] w-[40%] leading-[3rem]">
          Featured Homestay
        </div>
        <Box
          ref={carouselRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: 2,
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
          }}
        >
          {itemData.map((item, index) => (
            <Box key={index} sx={{ minWidth: 500}}>
              <Label sx={{fontWeight: 600, marginTop: 2}}>{item.title}</Label>
              <img
                srcSet={`${item.img}`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Left and Right Scroll Buttons */}
        <Button
          onClick={() => scroll(-300)}
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            zIndex: 1,
            backgroundColor: "#fff",
            "&:hover": { backgroundColor: "#f0f0f0" },
            marginTop: 4
          }}
        >
          <ArrowBackIosIcon />
        </Button>

        <Button
          onClick={() => scroll(300)}
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            zIndex: 1,
            backgroundColor: "#fff",
            "&:hover": { backgroundColor: "#f0f0f0" },
            marginTop: 4
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </>
  );
}

export default function ItemList() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "5rem 0",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "90%",
          p: 2,
          boxSizing: "border-box",
        }}
      >
        <ImageMasonry />
      </Box>
    </Box>
  );
}
