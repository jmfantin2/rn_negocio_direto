import styled from "styled-components/native";
import { colors } from "general";

export const SwitchContainer = styled.View`
  margin: 40px 0px 0px 0px;
  flex: 1;
  align-items: center;
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
