import React, { useContext, useEffect, useState } from "react";
import { CityContext } from "../../context/CityContext";
import { TextField, Button, Box, Typography } from "@mui/material";
import SkeletonWeatherForm from "./SkeletonWeatherForm";

const WeatherForm = () => {
  const { setCity } = useContext(CityContext);
  const [inputCity, setinputCity] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleCityChange = (event) => {
    setinputCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(inputCity);
    setinputCity("");
  };

  return isLoading ? (
    <SkeletonWeatherForm />
  ) : (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        mt: 4,
      }}
    >
      <Typography variant="h6" component="label" htmlFor="city">
        Enter City
      </Typography>
      <TextField
        id="city"
        label="City"
        variant="outlined"
        value={inputCity}
        onChange={handleCityChange}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Show weather
      </Button>
      <Typography variant="h6" component="label" htmlFor="city">
        Please Enter City
      </Typography>
    </Box>
  );
};

export default WeatherForm;
