import React, { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";

import { colors, strings } from "../../../../../assets/general";

import { BRAZILIAN_STATES, getStateCities } from "./helpers";

import { useLocation } from "../../context/Location";

import { Label, SelectBG, pickerStyle } from "./styles";

export default function LocationSelects() {
  const { state, setState, city, setCity } = useLocation();
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    setCityOptions(getStateCities(state));
    setCity("");
  }, [state]);

  return (
    <>
      <Label>Estado</Label>
      <SelectBG>
        <RNPickerSelect
          placeholder={{
            label: "───",
            value: null,
            color: colors.light,
          }}
          value={state}
          style={pickerStyle}
          useNativeAndroidPickerStyle={false}
          onValueChange={(value) => setState(value)}
          items={BRAZILIAN_STATES}
        />
      </SelectBG>
      <Label>Cidade</Label>
      <SelectBG>
        <RNPickerSelect
          placeholder={{
            label: "───",
            value: null,
            color: colors.light,
          }}
          value={city}
          style={pickerStyle}
          useNativeAndroidPickerStyle={false}
          onValueChange={(value) => setCity(value)}
          items={cityOptions}
        />
      </SelectBG>
    </>
  );
}
