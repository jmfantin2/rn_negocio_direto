// dumb component => styled right away!

import styled from "styled-components/native";
import { general } from "../../../../../assets/general";

import { Dimensions } from "react-native";
const screenH = Dimensions.get("window").height;

const Canvas = styled.KeyboardAvoidingView`
  height: ${screenH}px;
  justify-content: center;
  background-color: ${general.styles.colors.light};
`;

export default Canvas;
