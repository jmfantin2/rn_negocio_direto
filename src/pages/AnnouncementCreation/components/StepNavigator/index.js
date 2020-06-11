import React from "react";
import { ToastAndroid, TouchableOpacity } from "react-native";
import { general } from "../../../../../assets/general";
import { Container, CenterContent, Label } from "./styles";

import { AntDesign } from "@expo/vector-icons";

import { useStep } from "../../context/Step";
import { useSubmition } from "../../context/Submition";

export default function StepNavigator() {
  const { submitAllowed } = useSubmition();
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
        <Label>{step} de 5</Label>
      </CenterContent>
      {step < 5 ? (
        <TouchableOpacity onPress={() => setStep(step + 1)}>
          <AntDesign
            name="rightcircleo"
            size={42}
            color={general.styles.colors.darkCyan}
          />
        </TouchableOpacity>
      ) : submitAllowed ? (
        <TouchableOpacity>
          <AntDesign
            name="checkcircleo"
            size={42}
            color={general.styles.colors.businessGreen}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            ToastAndroid.showWithGravity(
              "Revise as informações!",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM
            )
          }
        >
          <AntDesign
            name="closecircleo"
            size={42}
            color={general.styles.colors.danger}
          />
        </TouchableOpacity>
      )}
    </Container>
  );
}
