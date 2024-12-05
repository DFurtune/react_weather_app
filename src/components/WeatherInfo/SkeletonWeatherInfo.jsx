import React from "react";
import { Card, CardContent, Skeleton, Box, Divider, Grid } from "@mui/material";

const SkeletonWeatherInfo = () => {
  return (
    <Card sx={{ width: 600, margin: "auto", mt: 4, boxShadow: 3 }}>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Skeleton
            variant="text"
            width={100}
            height={42}
            sx={{ mb: "11px" }}
          />
          <Skeleton variant="text" width={150} height={28} />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box display="flex" flexDirection="column" alignItems="center">
          <Skeleton variant="text" width="20%" />
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="text" width="30%" />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Skeleton
            variant="text"
            width="25%"
            height={30}
            sx={{ mx: "auto" }}
          />
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Skeleton
                variant="text"
                width="20%"
                height={20}
                sx={{ mx: "auto" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Skeleton
                variant="text"
                width="20%"
                height={20}
                sx={{ mx: "auto" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Skeleton
                variant="text"
                width="15%"
                height={20}
                sx={{ mx: "auto" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Skeleton
                variant="text"
                width="15%"
                height={20}
                sx={{ mx: "auto" }}
              />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box display="flex" flexDirection="column" alignItems="center">
          <Skeleton variant="text" width="30%" height={32} />
          <Skeleton variant="circular" width={100} height={100} />
          <Skeleton variant="text" width="20%" height={20} />
          <Skeleton variant="text" width="15%" height={20} />
          <Skeleton variant="text" width="20%" height={20} />
          <Skeleton variant="text" width="25%" height={20} />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box display="flex" flexDirection="column" alignItems="center">
          <Skeleton variant="text" width="20%" height={32} />
          <Skeleton variant="text" width="25%" height={20} />
          <Skeleton variant="text" width="20%" height={20} />
        </Box>

        <Divider sx={{ my: 2 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Skeleton variant="text" width="20%" height={32} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SkeletonWeatherInfo;
