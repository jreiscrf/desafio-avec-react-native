import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import * as S from "./styles";

const Cities = () => {
  const { params } = useRoute();
  console.log(params);
  const [citysName, setCitysName] = useState([]);

  return (
    <S.Container>
      <S.StatusBar backgroundColor="#8E8E8E" />

      <S.ViewLogo>
        <S.Logo source={require("../../../assets/img.png")} />
      </S.ViewLogo>
      {citysName.map((route) => (
        <S.ViewItens>
          <S.ViewInfos>
            <S.CountryName>{route.params.citysName.nome}</S.CountryName>
          </S.ViewInfos>

          <S.ViewInfos>
            <S.TouchableOpacity>
              <AntDesign name="right" size={20} color="black" />
            </S.TouchableOpacity>
          </S.ViewInfos>
        </S.ViewItens>
      ))}
    </S.Container>
  );
};

export default Cities;
