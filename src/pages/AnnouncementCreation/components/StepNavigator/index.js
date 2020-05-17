import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { general } from "../../../../../assets/general";
import { Container, CenterContent, Label } from "./styles";

import { AntDesign } from "@expo/vector-icons";

import { useStep } from "../../context/Step";

export default function StepNavigator() {
  const { step, setStep } = useStep();
  return (
    <Container>
      {step > 1 ? (
        <TouchableOpacity onPress={() => setStep(step - 1)}>
          <AntDesign
            name="leftcircleo"
            size={42}
            color={general.styles.colors.darkCyan}
          />
        </TouchableOpacity>
      ) : (
        <AntDesign
          name="leftcircleo"
          size={42}
          color={general.styles.colors.light}
        />
      )}
      <CenterContent>
        {step === 1 ? (
          <Label>VÍDEO OBRIGATÓRIO</Label>
        ) : step === 2 ? (
          <Label>OPÇÕES DE ANÚNCIO</Label>
        ) : step === 3 ? (
          <Label>SELEÇÃO DE GADO</Label>
        ) : step === 4 ? (
          <Label>SELEÇÃO ADICIONAL</Label>
        ) : null}
        <Label>{step}/7</Label>
      </CenterContent>
      {step < 7 ? (
        <TouchableOpacity onPress={() => setStep(step + 1)}>
          <AntDesign
            name="rightcircleo"
            size={42}
            color={general.styles.colors.darkCyan}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <AntDesign
            name="checkcircleo"
            size={42}
            color={general.styles.colors.businessGreen}
          />
        </TouchableOpacity>
      )}
    </Container>
  );
}
