import { useEffect, useState } from "react";
import { getMethod } from "./apis";
import "./App.css";
import styled from "styled-components";
import SearchRegion from "./components/SearchSection";
import WeatherDetail from "./components/WeatherDetail";
import { Heading } from "./globalStyles";

const AppContainer = styled.div`
  border: 2px dashed black;
  border-radius: 1em;
  height: 100%;
  width: 50%;
  margin: 0 auto;
  padding: 1em 4em;
  background-color: transparent;
`;


function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("in");

  const getWeather = async () => {
    try {
      let url = `weather?q=${city},${country}&APPID=`;
      let result = await getMethod({ url });
      console.log("result =", result.data);
      if(result.status == 200){
        setWeatherData(result.data);
      }else{
        alert(result)
      }
      
    } catch (error) {
      console.log("Err while fetching", error);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);



  return (
    <div className="App">
      <AppContainer>
        <Heading>Weather App</Heading>
        <SearchRegion
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
          getWeather={getWeather}
        />
        <WeatherDetail weatherData={weatherData} />
      </AppContainer>
    </div>
  );
}

export default App;
