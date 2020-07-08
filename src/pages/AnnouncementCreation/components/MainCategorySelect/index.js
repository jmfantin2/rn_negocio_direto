import React from "react";
import { Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useMainCategory } from "../../context/MainCategory";

import { colors, strings } from "../../../../../assets/general";
import { Label, SelectBG, pickerStyle } from "./styles";

export default function MainCategorySelect() {
  const { mainCategory, setMainCategory } = useMainCategory();
  return (
    <>
      <Label>Categoria</Label>
      <SelectBG>
        <RNPickerSelect
          placeholder={{
            label: "───",
            value: null,
            color: colors.light,
          }}
          value={mainCategory}
          style={pickerStyle}
          useNativeAndroidPickerStyle={false}
          onValueChange={(value) => setMainCategory(value)}
          items={CATEGORIES}
        />
      </SelectBG>
    </>
  );
}

const CATEGORIES = [
  { label: "TERNEIRO", value: "terneiro" },
  { label: "NOVILHO", value: "novilho" },
  { label: "TOURO", value: "touro" },
  { label: "TERNEIRA", value: "terneira" },
  { label: "NOVILHA", value: "novilha" },
  { label: "VACA", value: "vaca" },
  { label: "VACA INVERNAR", value: "vaca_invernar" },
];
