import React, { useState, useEffect } from "react";
import RNPickerSelect from "react-native-picker-select";

import { useMainCategory } from "../../context/MainCategory";
import { useOtherCategory } from "../../context/OtherCategory";
import { useOtherBreed } from "../../context/OtherBreed";

import { general } from "../../../../../assets/general";
import { Label, SelectBG, pickerStyle } from "./styles";

export default function OtherBreedSelect() {
  const { mainCategory } = useMainCategory(); // READ
  const { otherCategory } = useOtherCategory(); // READ
  const { otherBreed, setOtherBreed } = useOtherBreed(); // READ / WRITE

  const [shouldAppear, toggle] = useState(false);

  // Triggered everytime mainCategory changes
  useEffect(() => {
    setOtherBreed(null);
    if (
      mainCategory === "touro" ||
      mainCategory === "vaca_invernar" ||
      mainCategory === null
    ) {
      toggle(false);
    } else {
      toggle(true);
    }
  }, [mainCategory, otherCategory]);

  return (
    <>
      {shouldAppear ? (
        <>
          <Label>Raça</Label>
          <SelectBG>
            <RNPickerSelect
              placeholder={{
                label: "───",
                value: null,
                color: general.styles.colors.light,
              }}
              value={otherBreed}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setOtherBreed(value)}
              items={BREEDS}
            />
          </SelectBG>
        </>
      ) : null}
    </>
  );
}

const BREEDS = [
  { label: "ANGUS (ABERDEEN)", value: "aberdeen_angus" },
  { label: "ANGUS (RED)", value: "red_angus" },
  { label: "BRAFORD", value: "braford" },
  { label: "BRANGUS", value: "brangus" },
  { label: "BRITÂNICOS", value: "britanicos" },
  { label: "CANCHIN", value: "canchin" },
  { label: "CHAROLES", value: "charoles" },
  { label: "CRUZAS EUROPEIAS", value: "cruzas_europeias" },
  { label: "CRUZAS LEITEIRAS", value: "cruzas_leiteiras" },
  { label: "CRUZAS ZEBU", value: "cruzas_zebu" },
  { label: "DEVON", value: "devon" },
  { label: "EUROPEUS", value: "europeus" },
  { label: "HEREFORD", value: "hereford" },
  { label: "LIMOUSIN", value: "limousin" },
  { label: "NELORE", value: "nelore" },
  { label: "SIMENTAL", value: "simental" },
  { label: "TABAPUÃ", value: "tabapua" },
  { label: "ZEBU", value: "zebu" },
];
