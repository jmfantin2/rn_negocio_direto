import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { general } from "../../../assets/general";
import { navigate } from "../../utils";

import { Container, AdImage, InfoContainer, AdName } from "./styles";

export default function AdItem({ product }) {
  function shortenText(text, maxLength) {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.2}
      onPress={() => navigate("AnnouncementDetail")}
    >
      <Container>
        <AdImage source={{ uri: product.image }} />
        <InfoContainer>
          <Text style={{ fontWeight: "bold" }}>
            {shortenText(product.categories, 40)}
          </Text>
          <Text style={{ color: general.styles.colors.oceanGreen }}>
            {product.cep.city} ({product.cep.state})
          </Text>
        </InfoContainer>
      </Container>
    </TouchableOpacity>
  );
}
