import styled from "styled-components/native";
import { colors, strings } from "../../../assets/general";

import { Dimensions } from "react-native";
const screenW = Dimensions.get("window").width;

export const Container = styled.ScrollView`
  flex-direction: column;
  flex: 1;
  background-color: ${colors.lighter};
`;

export const DoubleContainer = styled.View`
  flex-direction: row;
`;

export const RequiredInfo = styled.View`
  flex-direction: column;
  padding: 10px 10px 10px 10px;
`;

export const RequiredInfoHalf = styled.View`
  flex-direction: column;
  width: ${screenW / 2}px;
  padding: 10px 10px 10px 10px;
`;

export const Label = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  height: 40px;
  padding: 0px 10px 0px 10px;
  background-color: ${colors.white};
  border-radius: 50px;
`;

export const ButtonText = styled.Text`
  text-align: left;
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`;

export const ErrorText = styled.Text`
  color: ${colors.businessGreen};
  font-size: 12px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.oceanGreen};
  border-radius: 50px;
  border: 1px solid ${colors.regular};
  height: 50px;
  margin: 30px 10px 30px 10px;
  justify-content: center;
  align-items: center;
`;
