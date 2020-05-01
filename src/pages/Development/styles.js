import styled from "styled-components/native";
import { general } from "../../../assets/general";

import { Dimensions } from "react-native";
const screenW = Dimensions.get("window").width;

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${general.styles.colors.light};
`;
