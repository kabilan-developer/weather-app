import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  margin: 1em auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.input`
    background-color: #F0F8FF;
    border:none;
    border-bottom: 3px dashed gray;
    outline: none;
    height: 40px;
    margin: 0 20px 0 0;
    padding: 0 .5em;
    text-transform: capitalize;
`

const SubmitButton = styled.button`
    background-color: darkblue;
    border-radius: 1em;
    height: 40px;
    width: 150px;
    color: white;
    font-family: "MontserratRegular" !important;
    &:hover{
        cursor: pointer;
    }
`
const SearchRegion = (props) => {
    let {city, setCity,country, setCountry,getWeather} = props;
  return (
    <SearchContainer>
      <InputBox type="text" autocapitalize="on" value={city} onChange={(e)=> setCity(e.target.value)} placeholder="eg: Delhi" />
      <InputBox type="text" value={country} onChange={(e)=> setCountry(e.target.value)} placeholder="eg: in" />
      <SubmitButton onClick={getWeather}>Submit</SubmitButton>
    </SearchContainer>
  );
};

export default SearchRegion;
