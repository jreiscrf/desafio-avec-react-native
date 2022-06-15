import React from "react";
import { AntDesign } from "@expo/vector-icons";
import * as S from "./styles";

const Register = ({ cityName }) => {
  return (
    <S.Container>
      <S.StatusBar backgroundColor="#8E8E8E" />

      <S.ViewLogo>
        <S.Logo source={require("../../../assets/img.png")} />
      </S.ViewLogo>

      <S.ViewItens>
        <S.ViewInfos>
          <S.CountryName>{cityName.nome}</S.CountryName>
        </S.ViewInfos>

        <S.ViewInfos>
          <S.TouchableOpacity>
            <AntDesign name="right" size={24} color="black" />
          </S.TouchableOpacity>
        </S.ViewInfos>
      </S.ViewItens>
    </S.Container>
  );
};

export default Register;
