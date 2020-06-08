import styled from "styled-components/native";
import { general } from "../../../../../assets/general";

export const SwitchContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${general.styles.colors.oceanGreen};
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 2px 0px;
`;

export const Description = styled.Text`
  color: ${general.styles.colors.black};
  text-align: center;
  font-size: 16px;
`;
