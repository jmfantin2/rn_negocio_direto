import React, { useState, useEffect } from "react";
import { useOtherCategory } from "context/AnnouncementCreation/OtherCategory";
import { useOtherQuantity } from "context/AnnouncementCreation/OtherQuantity";
import { useOtherVariants } from "context/AnnouncementCreation/OtherVariants";

import { Container, Label, Input } from "./styles";

export default function OtherVariantsInputs() {
  const { otherCategory } = useOtherCategory(); // READ
  const { otherQuantity } = useOtherQuantity(); // READ
  const { otherVariants, setOtherVariants } = useOtherVariants(); // TBD

  const [possibleVariants, setPossibleVariants] = useState([]);

  useEffect(() => {
    setPossibleVariants(getPossibleVariants(otherCategory));
  }, [otherCategory]);

  return (
    <>
      {possibleVariants.map((v) => (
        <Container key={v.key}>
          <Label>
            {"└─ " +
              v.case
                .charAt(0)
                .toUpperCase()
                .concat(v.case.substring(1))
                .replace("_", " ")}
          </Label>
          <Input
            value={"X"}
            onChangeText={(text) =>
              console.log("Quantity for", v.case, "( key", v.key, ")", text)
            }
            placeholder={otherQuantity ? otherQuantity + " ou menos" : "0"}
            maxLength={3}
            keyboardType={"numeric"}
          />
        </Container>
      ))}
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
      break;
  }
  // console.log("Possible variants for", value, ":", possibleVariants);
  return possibleVariants;
}
