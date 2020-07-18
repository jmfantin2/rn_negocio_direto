import styled from "styled-components/native";
import { colors } from "general";

export const Container = styled.View`
  margin: 40px 0px 0px 0px;
  flex: 1;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${colors.oceanGreen};
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px 2px 0px;
`;

export const Description = styled.Text`
  color: ${colors.darkCyan};
  text-align: center;
  font-size: 18px;
`;
