import React, { useContext, useEffect, useState } from "react";
import { CityContext } from "../../context/CityContext";
import axios from "axios";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";
import {
  convertKelvinToCelsius,
  formatSunTime,
  formatLocalTime,
  getWeatherIcon,
} from "../../utils/utils";
import { API_URL } from "../../constants/constants";
import AIWeatherInsights from "../AIWeatherInsights/AIWeatherInsights";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import SkeletonWeatherInfo from "./SkeletonWeatherInfo";

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

const WeatherInfo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { city } = useContext(CityContext);

  useEffect(() => {
    if (city) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `${API_URL}?q=${city}&appid=${API_KEY}`
          );
          setData(response.data);
        } catch (err) {
          console.error("Error fetching data", err);
          setError("Failed to fetch weather data");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [city]);

  if (loading) {
    return <SkeletonWeatherInfo />;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return data ? (
    <Card sx={{ width: 600, margin: "auto", mt: 4, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" align="center" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Local time: {formatLocalTime(data.timezone)}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography variant="h6">Location</Typography>
          <Typography variant="body2">Latitude: {data.coord.lat}</Typography>
          <Typography variant="body2">Longitude: {data.coord.lon}</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography variant="h6">Temperature</Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body2">
                Current: {convertKelvinToCelsius(data.main.temp)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                Feels Like: {convertKelvinToCelsius(data.main.feels_like)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                Max: {convertKelvinToCelsius(data.main.temp_max)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                Min: {convertKelvinToCelsius(data.main.temp_min)}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography variant="h6">Weather Conditions</Typography>
          <WeatherIcon
            alt={data.weather[0].main}
            src={getWeatherIcon(data.weather[0].icon)}
          />
          <Typography variant="body2">
            Condition: {data.weather[0].main}
          </Typography>
          <Typography variant="body2">
            Humidity: {data.main.humidity}%
          </Typography>
          <Typography variant="body2">
            Pressure: {data.main.pressure} hPa
          </Typography>
          <Typography variant="body2">
            Wind Speed: {data.wind.speed} m/s
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography variant="h6">Time Data</Typography>
          <Typography variant="body2">
            Sunrise: {formatSunTime(data.sys.sunrise, data.timezone)}
          </Typography>
          <Typography variant="body2">
            Sunset: {formatSunTime(data.sys.sunset, data.timezone)}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />
        <AIWeatherInsights weatherData={data} />
      </CardContent>
    </Card>
  ) : null;
};

export default WeatherInfo;
