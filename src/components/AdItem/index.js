import React from 'react'
import { Text } from 'react-native'
import { general } from '../../../assets/general'

import { Container, AdImage as AdImage, InfoContainer, AdName } from './styles'

export default function AdItem({ product }) {

  function shortenText(text, maxLength) {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Container>
      <AdImage
        source={{ uri: product.image }}
      />
      <InfoContainer>
        <AdName>LOTE {product.id}</AdName>
        <Text>{general.strings.WHERE}: {product.cep.city} ({product.cep.state})</Text>
        <Text>{general.strings.CATEGORIES}: {shortenText(product.categories, 27)}</Text>
      </InfoContainer>  
    </Container>
  );

}
