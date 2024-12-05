import React, { useEffect, useState } from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import { CohereClientV2 } from "cohere-ai";
import { convertKelvinToCelsius } from "../../utils/utils";

const AIWeatherInsights = ({ weatherData }) => {
  const [aiInsights, setAiInsights] = useState("");
  const AI_API_KEY = import.meta.env.VITE_COHERE_API_KEY;

  const cohere = new CohereClientV2({
    token: AI_API_KEY,
  });

  useEffect(() => {
    const fetchAIInsights = async () => {
      if (weatherData) {
        try {
          const content = `
          Temperature: ${convertKelvinToCelsius(weatherData?.main?.temp)}°C,
          Condition: ${weatherData?.weather[0]?.description},
          Wind speed: ${weatherData?.wind?.speed} m/s,
          You are my friend. In a short 1-2 sentences, suggest appropriate clothing for me for this weather.`;
          const response = await cohere.chat({
            model: "command-r-plus",
            messages: [
              {
                role: "user",
                content: content,
              },
            ],
          });

          setAiInsights(response?.message?.content[0]?.text);
        } catch (error) {
          console.error("Error fetching AI insights:", error);
          setAiInsights("Unable to fetch recommendations at this time.");
        }
      }
    };
    fetchAIInsights();
  }, [weatherData]);
  return (
    <Box>
      <Typography variant="h6" color="primary">
        AI Recommendations
      </Typography>
      {aiInsights ? (
        <Typography variant="body2">{aiInsights}</Typography>
      ) : (
        <Skeleton variant="rectangular" width="100%" height={40} />
      )}
    </Box>
  );
};

export default AIWeatherInsights;
