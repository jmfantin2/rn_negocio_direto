import React from 'react'
import { Text } from 'react-native'
import { general } from '../../../assets/general'

import { Container, ProductImage, InfoContainer, ProductName } from './styles'

export default function ProductItem({ product }) {
  return (
    <Container>
      <ProductImage
        source={{ uri: product.url }}
      />
      <InfoContainer>
        <ProductName>{product.name}</ProductName>
        <Text>{general.strings.COST} {product.cost}</Text>
        <Text>{general.strings.QUANTITY} {product.quantity}</Text>
        <Text>{general.strings.ID} {product.id}</Text>
      </InfoContainer>  
    </Container>
  );
}
