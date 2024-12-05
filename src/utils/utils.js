import moment from "moment";

export const convertKelvinToCelsius = (kelvin) => {
  return `${(kelvin - 273.15).toFixed()}°C`;
};

export const formatSunTime = (time, timezone) => {
  return moment
    .unix(time + timezone)
    .utc()
    .format("HH:mm:ss");
};

export const formatLocalTime = (timezone) => {
  return moment
    .unix(moment.utc().unix() + timezone)
    .utc()
    .format("HH:mm");
};

export const getWeatherIcon = (icon) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};
