import React, { useState, useEffect } from "react";
import RNPickerSelect from "react-native-picker-select";

import { useMainCategory } from "context/AnnouncementCreation/MainCategory";
import { useDynamic } from "context/AnnouncementCreation/Dynamic";
import { useOtherCategory } from "context/AnnouncementCreation/OtherCategory";

import { colors } from "general";
import { Cow, Label, SelectBG, Notice, pickerStyle } from "./styles";
import CowSrc from "assets/images/cow.png";

export default function OtherCategorySelect() {
  const { mainCategory } = useMainCategory(); // READ
  const { dynamic } = useDynamic(); // READ
  const { otherCategory, setOtherCategory } = useOtherCategory(); // READ

  const [options, setOptions] = useState([]);
  const [shouldAppear, toggle] = useState(true);

  // Triggered everytime mainCategory changes
  useEffect(() => {
    if (
      dynamic ||
      mainCategory === "touro" ||
      mainCategory === "vaca_invernar" ||
      mainCategory === null
    ) {
      setOtherCategory(null);
      toggle(false);
    } else {
      setOptions(getMatchedCategories(mainCategory));
      toggle(true);
    }
  }, [mainCategory, dynamic]);

  return (
    <>
      {shouldAppear ? (
        <>
          <Label>Categoria adicional</Label>
          <SelectBG>
            <RNPickerSelect
              placeholder={{
                label: "───",
                value: null,
                color: colors.light,
              }}
              value={otherCategory}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setOtherCategory(value)}
              items={options}
            />
          </SelectBG>
        </>
      ) : (
        <>
          <>
            <Cow source={CowSrc} resizeMode="contain" />
            <Notice>
              Não há categoria{"\n"}adicional em caso de:{"\n\n"}PREÇO DINÂMICO
              {"\n"}TOURO
              {"\n"}
              VACA INVERNAR
            </Notice>
          </>
        </>
      )}
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
