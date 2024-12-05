import { useState } from "react";
import { CityContext } from "./context/CityContext";
import WeatherForm from "./components/WeatherForm/WeatherForm";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import "./App.css";

function App() {
  const [city, setCity] = useState("");

  return (
    <CityContext.Provider value={{ city, setCity }}>
      <WeatherForm />
      <WeatherInfo />
    </CityContext.Provider>
  );
}

export default App;
