import React, { useState } from "react";
import Register from "../../components/Register";
import * as S from "./styles";

const AddCities = ({ navigation }) => {
  const [citysName, setCitysName] = useState([]);
  const [cityName, setCityName] = useState("");
  const [countrysName, setCountrysName] = useState([]);
  const [countryName, setCountryName] = useState("");

  const register = () => {
    if (cityName == "") {
      return;
    }
    if (countryName == "") {
      return;
    }
    setCitysName([{ nome: cityName }, ...citysName]);
    setCountrysName([{ nome: countryName }, ...countrysName]);
    setCityName("");
    setCountryName("");
  };

  return (
    <S.Container>
      <S.Logo source={require("../../../assets/img.png")} />

      <S.Input
        value={cityName}
        placeholder="City Name"
        onChangeText={(e) => {
          setCityName(e);
          console.log(e);
        }}
      />
      <S.Input
        value={countryName}
        placeholder="Country Name"
        onChangeText={(e) => {
          setCountryName(e);
          console.log(e);
        }}
      />

      <S.Button
        onPress={() =>
          navigation.navigate("ADD CITY", {
            paramKey: citysName,
          })
        }
        title="Submit"
        color="#8E8E8E"
      />

      {citysName.map((cityName) => (
        <Register cityName={cityName} />
      ))}
    </S.Container>
  );
};

export default AddCities;
