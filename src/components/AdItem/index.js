import React, { useState, useEffect } from "react";
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
      onPress={() => navigate("AnnouncementDetail", { id: product.id })}
    >
      <Container>
        <AdImage
          source={{ uri: "https://app.kshost.com.br/images/video.png" }}
        />
        <InfoContainer>
          <AdName>{shortenText(product.id, 40)}</AdName>
          <Text style={{ color: general.styles.colors.oceanGreen }}>
            {product.location.city} ({product.location.state})
          </Text>
        </InfoContainer>
      </Container>
    </TouchableOpacity>
  );
}
