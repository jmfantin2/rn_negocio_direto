import styled from "styled-components/native";
import { colors, strings } from "../../../../../assets/general";

export const SwitchContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  color: ${colors.oceanGreen};
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 2px 0px;
`;

export const Description = styled.Text`
  color: ${colors.black};
  text-align: center;
  font-size: 16px;
`;
