import React from "react";
import { Box } from "@mui/material";

const WeatherIcon = ({alt, src}) => {
  return (
    <Box
      component="img"
      sx={{
        width: 100,
        height: 100,
        borderRadius: "8px",
        objectFit: "cover",
      }}
      alt={alt}
      src={src}
    ></Box>
  );
};

export default WeatherIcon;
