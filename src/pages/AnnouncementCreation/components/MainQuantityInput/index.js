import React from "react";
import { useMainQuantity } from "../../context/MainQuantity";

import { Container, Label, Input } from "./styles";

export default function MainQuantityInput() {
  const { mainQuantity, setMainQuantity } = useMainQuantity();
  return (
    <Container>
      <Label>Quantidade</Label>
      <Input
        value={mainQuantity}
        onChangeText={(text) => setMainQuantity(text.replace(/\D/g, ""))}
        placeholder={"n° cabeças"}
        maxLength={3}
        keyboardType={"numeric"}
      />
    </Container>
  );
}
