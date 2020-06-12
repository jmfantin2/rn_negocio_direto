import styled from "styled-components/native";
import { general } from "../../../../../assets/general";

import { Dimensions } from "react-native";

export const OptionalBar = styled.View`
  background-color: ${general.styles.colors.darkCyan};
`;

export const OptionalText = styled.Text`
  color: ${general.styles.colors.white};
  font-size: 18px;
  font-weight: bold;
  align-self: center;
`;
