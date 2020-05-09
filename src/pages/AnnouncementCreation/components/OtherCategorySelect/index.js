import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useMainCategory } from "../../context/MainCategory";
import { useOtherCategory } from "../../context/OtherCategory";

import { general } from "../../../../../assets/general";
import { Label, SelectBG, pickerStyle } from "./styles";

export default function OtherCategorySelect() {
  const { mainCategory } = useMainCategory(); // READ
  const { otherCategory, setOtherCategory } = useOtherCategory(); // READ

  const [options, setOptions] = useState([]);
  const [shouldAppear, toggle] = useState(false);

  // Triggered everytime mainCategory changes
  useEffect(() => {
    setOtherCategory(null);
    if (
      mainCategory === "touro" ||
      mainCategory === "vaca_invernar" ||
      mainCategory === null
    ) {
      toggle(false);
    } else {
      setOptions(getMatchedCategories(mainCategory));
      toggle(true);
    }
  }, [mainCategory]);

  return (
    <>
      {shouldAppear ? (
        <>
          <Label>Categoria adicional (opcional)</Label>
          <SelectBG>
            <RNPickerSelect
              placeholder={{
                label: "───",
                value: null,
                color: general.styles.colors.light,
              }}
              value={otherCategory}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setOtherCategory(value)}
              items={options}
            />
          </SelectBG>
        </>
      ) : null}
    </>
  );
}

function getMatchedCategories(value) {
  let matchedCategories = [];
  switch (value) {
    case "terneiro":
      matchedCategories = [
        { label: "NOVILHO", value: "novilho" },
        { label: "TERNEIRA", value: "terneira" },
      ];
      break;
    case "novilho":
      matchedCategories = [
        { label: "TERNEIRO", value: "terneiro" },
        { label: "NOVILHA", value: "novilha" },
        { label: "VACA", value: "vaca" },
      ];
      break;
    case "terneira":
      matchedCategories = [
        { label: "NOVILHA", value: "novilha" },
        { label: "TERNEIRO", value: "terneiro" },
      ];
      break;
    case "novilha":
      matchedCategories = [
        { label: "TERNEIRA", value: "terneira" },
        { label: "NOVILHO", value: "novilho" },
        { label: "VACA", value: "vaca" },
      ];
      break;
    case "vaca":
      matchedCategories = [{ label: "NOVILHA", value: "novilha" }];
      break;
    default:
      // "touro", "vaca_invernar", null
      break;
  }
  // console.log("Matched categories for", value, ":", matchedCategories);
  return matchedCategories;
}