import styled from "styled-components/native";
import { colors, strings } from "../../../assets/general";

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${colors.light};
`;

export const ContainerQtt = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 18px 0px 0px 10px;
  align-items: center;
`;

export const Label = styled.Text`
  font-weight: bold;
`;
