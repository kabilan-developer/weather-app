import React from "react";
import styled from "styled-components";
import { Heading } from "../globalStyles";
import { BoldText } from "../globalStyles";

const WeatherBox = styled.div`
  margin: 1em auto;
  background-color: lightgray;
  padding: 0.5em;
  border-radius: 0.5em;
  border: 1px solid black;
  font-family: "Poppins-Regular";
`;

const TempBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  padding: 0;
`;

const InfoContainer = styled.div`
  margin: 1em auto;
  display: flex;
  justify-content: space-between;
`;

const InfoBox = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px dashed black;
`;

const LightText = styled.h4`
  color: gray;
`;

const WeatherDetail = (props) => {
  let { weatherData } = props;
  return (
    <>
      <WeatherBox>
        <span>
          {weatherData.name}, {weatherData?.sys?.country}. Weather
        </span>
        <br />
        <small>As of {new Date().toLocaleTimeString()} </small>
        <TempBox>
          <Heading>
            {Math.round(weatherData?.main?.temp - 273.15)}
            <sup>o</sup>
          </Heading>
          <img
            src={`https://openweathermap.org/img/w/${
              weatherData.weather ? weatherData.weather[0]?.icon : "-"
            }.png`}
            alt="img"
            style={{ objectFit: "cover" }}
            height={100}
            width={100}
          />
          <br />
          <small>
            {weatherData.weather ? weatherData.weather[0].description : null}
          </small>
        </TempBox>
        <span>
          {weatherData.weather ? weatherData.weather[0].description : null}
        </span>
      </WeatherBox>
      <InfoContainer>
        <InfoBox>
          <BoldText>High/Low</BoldText>
          <LightText>
            {Math.round(weatherData?.main?.temp_max - 273.15)} /{" "}
            {Math.round(weatherData?.main?.temp_min - 273.15)}
          </LightText>
        </InfoBox>
        <InfoBox>
          <BoldText>Wind</BoldText>
          <LightText>{weatherData?.wind?.speed} km/hr</LightText>
        </InfoBox>
      </InfoContainer>
      <InfoContainer>
        <InfoBox>
          <BoldText>Humidity</BoldText>
          <LightText>{weatherData?.main?.humidity} %</LightText>
        </InfoBox>
        <InfoBox>
          <BoldText>Wind Direction</BoldText>
          <LightText>
            {weatherData?.wind?.deg}
            <sup>o</sup> deg
          </LightText>
        </InfoBox>
      </InfoContainer>
      <InfoContainer>
        <InfoBox>
          <BoldText>Pressure</BoldText>
          <LightText>{weatherData?.main?.pressure} hPa</LightText>
        </InfoBox>
        <InfoBox>
          <BoldText>Sunrise</BoldText>
          <LightText>
            {new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </LightText>
        </InfoBox>
      </InfoContainer>
      <InfoContainer>
        <InfoBox>
          <BoldText>Visibility</BoldText>
          <LightText>
            {Math.round(weatherData?.visibility / 100) / 10} km
          </LightText>
        </InfoBox>
        <InfoBox>
          <BoldText>Sunset</BoldText>
          <LightText>
            {new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </LightText>
        </InfoBox>
      </InfoContainer>
    </>
  );
};

export default WeatherDetail;
