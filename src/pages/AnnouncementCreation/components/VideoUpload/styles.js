import styled from "styled-components/native";
import { colors, strings } from "../../../../../assets/general";

export const Area = styled.View`
  background-color: ${colors.lighter};
  height: 200px;
  align-items: center;
  justify-content: center;
  border-width: 3px;
  border-color: ${colors.businessGreen};
  border-radius: 3px;
  border-style: dashed;
`;

export const Message = styled.Text`
  color: ${colors.oceanGreen};
  font-size: 18px;
  font-weight: bold;
`;

import React from "react";
import { Ionicons } from "@expo/vector-icons";

export const CameraIcon = () => {
  return <Ionicons name="md-videocam" size={42} color={colors.oceanGreen} />;
};

export const CheckIcon = () => {
  return (
    <Ionicons
      name="md-checkmark-circle-outline"
      size={42}
      color={colors.oceanGreen}
    />
  );
};
