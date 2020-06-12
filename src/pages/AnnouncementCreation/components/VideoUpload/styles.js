import styled from "styled-components/native";
import { general } from "../../../../../assets/general";

export const Area = styled.View`
  background-color: ${general.styles.colors.lighter};
  height: 200px;
  align-items: center;
  justify-content: center;
  border-width: 3px;
  border-color: ${general.styles.colors.businessGreen};
  border-radius: 3px;
  border-style: dashed;
`;

export const Message = styled.Text`
  color: ${general.styles.colors.oceanGreen};
  font-size: 18px;
  font-weight: bold;
`;

import React from "react";
import { Ionicons } from "@expo/vector-icons";

export const CameraIcon = () => {
  return (
    <Ionicons
      name="md-videocam"
      size={42}
      color={general.styles.colors.oceanGreen}
    />
  );
};

export const CheckIcon = () => {
  return (
    <Ionicons
      name="md-checkmark-circle-outline"
      size={42}
      color={general.styles.colors.oceanGreen}
    />
  );
};
