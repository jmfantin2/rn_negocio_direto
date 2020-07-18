import React, { useState, useEffect } from "react";

import { useMainCategory } from "context/AnnouncementCreation/MainCategory";
import { useDynamic } from "context/AnnouncementCreation/Dynamic";
import { useOtherQuantity } from "context/AnnouncementCreation/OtherQuantity";

import { Container, Label, Input } from "./styles";

export default function OtherQuantityInput() {
  const { mainCategory } = useMainCategory(); // READ
  const { dynamic } = useDynamic();
  const { otherQuantity, setOtherQuantity } = useOtherQuantity();

  const [shouldAppear, toggle] = useState(false);

  // Triggered everytime mainCategory changes
  useEffect(() => {
    if (
      dynamic ||
      mainCategory === "touro" ||
      mainCategory === "vaca_invernar" ||
      mainCategory === null
    ) {
      setOtherQuantity("");
      toggle(false);
    } else {
      toggle(true);
    }
  }, [mainCategory, dynamic]);

  return (
    <>
      {shouldAppear ? (
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
      ) : null}
    </>
  );
}
