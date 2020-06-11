import styled from "styled-components/native";
import { general } from "../../../../../assets/general";

export const Label = styled.Text`
  color: ${general.styles.colors.oceanGreen};
  align-self: center;
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 100%;
  margin: 10px 0px 20px 0px;
  padding: 0px 10px 0px 10px;
  background-color: ${general.styles.colors.lighter};
  font-size: 18px;
  text-align: center;
  color: ${general.styles.colors.darkCyan};
  border-radius: 50px;
`;
