import React, { useEffect } from "react";
import { useDynamic } from "../../context/Dynamic";
import { usePrice } from "../../context/Price";

import { Container, Label, Input } from "./styles";

export default function PriceInput() {
  const { dynamic } = useDynamic(); // READ
  const { price, setPrice } = usePrice();

  useEffect(() => {
    if (dynamic) {
      setPrice("");
    }
  }, [dynamic]);

  return (
    <>
      {!dynamic ? (
        <Container>
          <Label>Preço por kg</Label>
          <Input
            value={price}
            onChangeText={(text) => setPrice(text.replace(/\D/g, ""))}
            placeholder={"em R$"}
            maxLength={3}
            keyboardType={"numeric"}
          />
        </Container>
      ) : null}
    </>
  );
}
