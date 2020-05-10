import styled from "styled-components/native";
import { general } from "../../../assets/general";

export const Container = styled.View`
  flex: 1;
  background-color: ${general.styles.colors.white};
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${general.styles.colors.light};
  padding: 10px;
  align-items: center;
`;

export const AdImage = styled.Image`
  height: 52px;
  width: 70px;
  border-radius: 4px;
  align-self: center;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const CattleContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-evenly;
`;
export const CategoryAndBreed = styled.View`
  flex-direction: column;
`;

export const Tag = styled.View`
  width: ${(props) => (props.quantity ? "40px" : "110px")};
  border-radius: ${(props) => (props.quantity ? "15px" : "4px")};
  align-items: center;
  justify-content: center;
  margin: 3px;
  background-color: ${(props) =>
    props.breed || props.quantity
      ? "#bfbfbf"
      : props.category === "TERNEIRA"
      ? "#c87ca8"
      : props.category === "NOVILHA"
      ? "#aa2470"
      : props.category === "VACA"
      ? "#920054"
      : props.category === "VACA_INVERNAR"
      ? "#6a0045"
      : props.category === "TERNEIRO"
      ? "#68679e"
      : props.category === "NOVILHO"
      ? "#312b79"
      : props.category === "TOURO"
      ? "#100046"
      : "#393939"};
`;

export const TagLabel = styled.Text`
  font-weight: bold;
  font-size: ${(props) => (props.type === "quantity" ? "20px" : "14px")};
  color: white;
`;

import React from "react";
import { View, Text } from "react-native";
import { Foundation, Ionicons } from "@expo/vector-icons";

export const DynamicBadge = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Foundation
        name="burst"
        size={50}
        color={general.styles.colors.darkCyan}
        style={{ marginLeft: 10, marginRight: 10 }}
      />
      <Text
        style={{
          position: "absolute",
          marginTop: 15,
          fontWeight: "bold",
          marginLeft: 30,
          fontStyle: "italic",
          color: "white",
        }}
      >
        Dn
      </Text>
    </View>
  );
};

export const FixedBadge = () => {
  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Ionicons
        name="ios-radio-button-on"
        size={50}
        color={general.styles.colors.beet}
        style={{ marginLeft: 10, marginRight: 10 }}
      />
      <Text
        style={{
          position: "absolute",
          marginTop: 15,
          fontWeight: "bold",
          marginLeft: 30,
          fontStyle: "italic",
          color: "white",
        }}
      >
        Fx
      </Text>
    </View>
  );
};
