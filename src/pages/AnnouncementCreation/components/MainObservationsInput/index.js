import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { useDynamic } from "../../context/Dynamic";
import { useMainCategory } from "../../context/MainCategory";
import { useMainObservations } from "../../context/MainObservations";

import { Container, Label, Input } from "./styles";

export default function MainObservationsInput() {
  const { mainCategory } = useMainCategory(); // READ
  const { mainObservations, setMainObservations } = useMainObservations();

  const [possibleVariants, setPossibleVariants] = useState([]);

  useEffect(() => {
    setPossibleVariants(getPossibleVariants(mainCategory));
  }, [mainCategory]);

  return (
    <>
      <Container>
        <Label>Observações</Label>
        <Text>Forneça mais informações</Text>

        {possibleVariants.map((v) => (
          <Text key={v.key} style={{ fontWeight: "bold" }}>
            {v.case
              .charAt(0)
              .toUpperCase()
              .concat(v.case.substring(1))
              .replace("_", " ")}
            ?
          </Text>
        ))}
        <Input
          textAlignVertical={"top"}
          multiline={true}
          value={mainObservations}
          onChangeText={(text) => setMainObservations(text)}
        />
      </Container>
    </>
  );
}

function getPossibleVariants(value) {
  let possibleVariants = [];
  switch (value) {
    case "novilho":
      possibleVariants = [{ key: 0, case: "castrados" }];
      break;
    case "terneiro":
      possibleVariants = [{ key: 0, case: "castrados" }];
      break;
    case "touro":
      possibleVariants = [{ key: 0, case: "com_registro" }];
      break;
    case "novilha":
      possibleVariants = [{ key: 0, case: "prenhes" }];
      break;
    case "vaca":
      possibleVariants = [
        { key: 0, case: "prenhes" },
        { key: 1, case: "com_cria" },
      ];
      break;
    default:
      // "terneira", "vaca_invernar", null
      possibleVariants = [];
      break;
  }
  // console.log("Possible variants for", value, ":", possibleVariants);
  return possibleVariants;
}
