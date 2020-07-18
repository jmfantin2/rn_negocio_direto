import React from "react";
import { useAverageWeight } from "context/AnnouncementCreation/AverageWeight";

import { Container, Label, Input } from "./styles";

export default function AverageWeightInput() {
  const { averageWeight, setAverageWeight } = useAverageWeight();
  return (
    <Container>
      <Label>Peso médio</Label>
      <Input
        value={averageWeight}
        onChangeText={(text) => setAverageWeight(text.replace(/\D/g, ""))}
        placeholder={"em kg"}
        maxLength={3}
        keyboardType={"numeric"}
      />
    </Container>
  );
}
