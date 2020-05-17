import React from "react";
import { useOtherQuantity } from "../../context/OtherQuantity";

import { Container, Label, Input } from "./styles";

export default function OtherQuantityInput() {
  const { otherQuantity, setOtherQuantity } = useOtherQuantity();
  return (
    <Container>
      <Label>Quantidade</Label>
      <Input
        value={otherQuantity}
        onChangeText={(text) => setOtherQuantity(text.replace(/\D/g, ""))}
        placeholder={"n° cabeças"}
        maxLength={3}
        keyboardType={"numeric"}
      />
    </Container>
  );
}
