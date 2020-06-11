import styled from "styled-components/native";
import { general } from "../../../../../assets/general";

import { Dimensions } from "react-native";
const screenW = Dimensions.get("window").width;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 20px 0px;
`;

export const Label = styled.Text`
  color: ${general.styles.colors.oceanGreen};
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  height: 40px;
  padding: 0px 10px 0px 10px;
  background-color: ${general.styles.colors.lighter};
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: ${general.styles.colors.oceanGreen};
  border-radius: 50px;
  width: ${screenW / 3}px;
`;
