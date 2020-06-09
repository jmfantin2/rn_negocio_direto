import styled from "styled-components/native";
import { general } from "../../../../../assets/general";

export const Container = styled.View`
  flex-direction: row;
  margin: 0px 20px 0px 20px;
  height: 160px;
  align-items: center;
`;

export const CenterContent = styled.View`
  flex: 1;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${general.styles.colors.darkCyan};
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 2px 0px;
`;
