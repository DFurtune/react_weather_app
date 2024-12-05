import React from "react";
import { Box, Skeleton } from "@mui/material";

const SkeletonWeatherForm = () => {
  return (
    <Box
      sx={{
        width: 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        mt: 4,
      }}
    >
      <Skeleton variant="text" width={150} height={30} />
      <Skeleton variant="rounded" width="100%" height={56} />
      <Skeleton variant="rounded" width={150} height={36} />
      <Skeleton variant="text" width={150} height={30} />
    </Box>
  );
};

export default SkeletonWeatherForm;
