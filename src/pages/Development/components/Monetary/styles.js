import styled from "styled-components/native";

import { Dimensions } from "react-native";
const screenW = Dimensions.get("window").width;

export const PriceInput = styled.TextInput`
  height: 40px;
  padding: 0px 10px 0px 10px;
  background-color: pink;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: black;
  border-radius: 3px;
  width: ${screenW / 3}px;
`;
