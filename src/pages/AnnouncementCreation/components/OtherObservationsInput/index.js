import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { useDynamic } from "../../context/Dynamic";
import { useMainCategory } from "../../context/MainCategory";
import { useOtherCategory } from "../../context/OtherCategory";
import { useOtherObservations } from "../../context/OtherObservations";

import { Container, Label, Input } from "./styles";

export default function OtherObservationsInput() {
  const { dynamic } = useDynamic(); // READ
  const { mainCategory } = useMainCategory(); // READ
  const { otherCategory } = useOtherCategory(); // READ
  const { otherObservations, setOtherObservations } = useOtherObservations();

  const [shouldAppear, toggle] = useState(false);

  const [possibleVariants, setPossibleVariants] = useState([]);

  useEffect(() => {
    setPossibleVariants(getPossibleVariants(otherCategory));
  }, [otherCategory]);

  // Triggered everytime mainCategory changes
  useEffect(() => {
    if (
      dynamic ||
      mainCategory === "touro" ||
      mainCategory === "vaca_invernar" ||
      mainCategory === null
    ) {
      setOtherObservations("");
      toggle(false);
    } else {
      toggle(true);
    }
  }, [mainCategory, dynamic]);

  return (
    <>
      {shouldAppear ? (
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
            value={otherObservations}
            onChangeText={(text) => setOtherObservations(text)}
          />
        </Container>
      ) : null}
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
