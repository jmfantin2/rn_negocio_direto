import React, { useEffect } from "react";
import { Slider } from "react-native";
import { SwitchContainer, Label, Description } from "./styles";

import { useDynamic } from "../../context/Dynamic";
import { useDaysActive } from "../../context/DaysActive";

export default function DaysActiveSlider() {
  const { dynamic } = useDynamic();
  const { daysActive, setDaysActive } = useDaysActive();

  useEffect(() => {
    setDaysActive(2);
  }, [dynamic]);

  return (
    <SwitchContainer>
      <Label>Dias em Anúncio</Label>
      <Slider
        minimumValue={2}
        maximumValue={dynamic ? 3 : 7}
        step={1}
        value={daysActive}
        onValueChange={(value) => setDaysActive(value)}
        style={{ width: "100%" }}
      />
      <Label>{daysActive.toString()}</Label>
    </SwitchContainer>
  );
}
