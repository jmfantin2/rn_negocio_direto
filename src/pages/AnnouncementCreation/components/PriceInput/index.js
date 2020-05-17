import React from "react";
import { useDynamic } from "../../context/Dynamic";
import { usePrice } from "../../context/Price";

import { Container, Label, Input } from "./styles";

export default function PriceInput() {
  const { dynamic } = useDynamic(); // READ
  const { price, setPrice } = usePrice();

  return (
    <>
      {!dynamic ? (
        <Container>
          <Label>Preço por kg</Label>
          <Input
            value={price}
            onChangeText={(text) => setPrice(text.replace(/\D/g, ""))}
            placeholder={"em kg"}
            maxLength={3}
            keyboardType={"numeric"}
          />
        </Container>
      ) : null}
    </>
  );
}
